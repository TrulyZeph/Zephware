let answering = false;
let answerInterval = null;

function cleanResult(num, decimals) {
    if (typeof num === "number") num = num.toString();
    if (num.includes('e')) return Number(num).toPrecision(decimals + 1).replace(/\.?0+$/, '');
    let n = Number(num);
    if (isNaN(n)) return '';
    let str = n.toFixed(decimals !== undefined ? decimals : 10);
    str = str.replace(/(\.\d*?[1-9])0+$/g, '$1').replace(/\.0+$/, '');
    if (/\.\d{3,}/.test(str)) str = n.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    return str;
}

function countDecimals(numStr) {
    if (typeof numStr !== "string") numStr = String(numStr);
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    }
    return 0;
}

function answerQuestions() {
    removeNotes();
    document.querySelectorAll('.math.section').forEach(section => {
        const vertArith = section.querySelector('.vertArith');
        if (vertArith) {
            const rows = vertArith.querySelectorAll('.vertArithRow');
            if (rows.length < 2) return;
            let num1str = '';
            rows[0].querySelectorAll('.expression.number, .txt').forEach(cell => {
                num1str += cell.textContent.trim();
            });
            let num2str = '';
            rows[1].querySelectorAll('.expression.number, .txt').forEach(cell => {
                num2str += cell.textContent.trim();
            });
            let num1 = parseFloat(num1str);
            let num2 = parseFloat(num2str);
            let operator = null;
            if (rows[1].querySelector('.xSymbol')) operator = '*';
            else if (rows[1].textContent.includes('+')) operator = '+';
            else if (rows[1].textContent.includes('-') || rows[1].textContent.includes('–')) operator = '-';
            else if (rows[1].textContent.includes('÷') || rows[1].textContent.includes('/')) operator = '/';
            let result;
            switch (operator) {
                case '*': result = num1 * num2; break;
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '/': result = num2 !== 0 ? num1 / num2 : ''; break;
                default: result = '';
            }
            const dec1 = countDecimals(num1str);
            const dec2 = countDecimals(num2str);
            const leastDecimals = Math.max(dec1, dec2, 2);
            if (typeof result === 'number' && !isNaN(result)) {
                result = cleanResult(result, leastDecimals);
            }
            const answerInputs = vertArith.querySelectorAll('input.fillIn');
            if (answerInputs.length > 0 && typeof result === 'string') {
                if (answerInputs.length === 1) {
                    answerInputs[0].value = result;
                } else {
                    const digits = result.replace('.', '').padStart(answerInputs.length, '0').split('');
                    for (let i = 0; i < answerInputs.length; i++) {
                        answerInputs[i].value = digits[digits.length - answerInputs.length + i];
                    }
                }
            }
        }
    });
    document.querySelectorAll('.old-space-indent').forEach(div => {
        const divisorCell = div.querySelector('.old-long-division-divisor');
        const dividendCell = div.querySelector('.old-long-division-bar td[align="left"]');
        const answerInput = div.querySelector('.old-long-division-quotient input.fillIn');
        if (divisorCell && dividendCell && answerInput) {
            const divisorStr = divisorCell.textContent.trim();
            const dividendStr = dividendCell.textContent.trim();
            const divisor = parseFloat(divisorStr);
            const dividend = parseFloat(dividendStr);
            if (!isNaN(divisor) && !isNaN(dividend) && divisor !== 0) {
                const dec1 = countDecimals(divisorStr);
                const dec2 = countDecimals(dividendStr);
                const leastDecimals = Math.max(dec1, dec2, 2);
                let result = dividend / divisor;
                result = cleanResult(result, leastDecimals);
                answerInput.value = result;
            }
        }
    });
    document.querySelectorAll('.old-space-indent').forEach(div => {
        const tables = div.querySelectorAll('table');
        if (tables.length === 0) return;
        const table = tables[0];
        const tds = table.querySelectorAll('td[align="right"]');
        if (tds.length < 2) return;
        let num1str = '';
        let num2str = '';
        let operator = null;
        let foundFirst = false;
        let foundOperator = false;
        tds.forEach(td => {
            const txt = td.textContent.trim();
            if (!foundFirst && txt && !isNaN(txt)) {
                num1str = txt;
                foundFirst = true;
            } else if (foundFirst && !foundOperator && (txt.includes('+') || txt.includes('-') || txt.includes('×') || txt.includes('÷') || txt.includes('/'))) {
                if (txt.includes('+')) operator = '+';
                else if (txt.includes('-')) operator = '-';
                else if (txt.includes('×')) operator = '*';
                else if (txt.includes('÷') || txt.includes('/')) operator = '/';
                foundOperator = true;
            } else if (foundFirst && foundOperator && txt && !isNaN(txt)) {
                num2str = txt;
            }
        });
        if (num1str && num2str && operator) {
            let num1 = parseFloat(num1str);
            let num2 = parseFloat(num2str);
            let result;
            switch (operator) {
                case '*': result = num1 * num2; break;
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '/': result = num2 !== 0 ? num1 / num2 : ''; break;
                default: result = '';
            }
            const dec1 = countDecimals(num1str);
            const dec2 = countDecimals(num2str);
            const leastDecimals = Math.max(dec1, dec2, 2);
            if (typeof result === 'number' && !isNaN(result)) {
                result = cleanResult(result, leastDecimals);
            }
            const answerInput = div.querySelector('input.fillIn');
            if (answerInput && typeof result === 'string') {
                answerInput.value = result;
            }
        }
    });
    processHorizontalBinary();
    processSimpleHorizontalEquations();
    processComparisonProblems();
    const widgetFt = document.querySelector('.yui3-widget-ft.fade-in');
    if (widgetFt) {
        const submitBtn = widgetFt.querySelector('button.crisp-button');
        if (submitBtn) {
            setTimeout(() => {
                submitBtn.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
            }, 100);
        }
    }
}

function processHorizontalBinary() {
    document.querySelectorAll('.math.section').forEach(section => {
        const bundles = section.querySelectorAll('.bundle');
        if (bundles.length === 3) {
            const num1span = bundles[0].querySelector('.expression.number');
            const num2span = bundles[1].querySelector('.expression.number');
            let operator = null;
            if (bundles[0].querySelector('.minusSymbolContainer')) operator = '-';
            else if (bundles[0].querySelector('.plusSymbolContainer')) operator = '+';
            else if (bundles[0].querySelector('.xSymbolContainer')) operator = '*';
            else if (bundles[0].querySelector('.divideSymbolContainer')) operator = '/';
            if (!operator) {
                if (bundles[1].querySelector('.minusSymbolContainer')) operator = '-';
                else if (bundles[1].querySelector('.plusSymbolContainer')) operator = '+';
                else if (bundles[1].querySelector('.xSymbolContainer')) operator = '*';
                else if (bundles[1].querySelector('.divideSymbolContainer')) operator = '/';
            }
            if (!operator) {
                const opText = bundles[0].textContent + bundles[1].textContent;
                if (opText.includes('-') || opText.includes('–')) operator = '-';
                else if (opText.includes('+')) operator = '+';
                else if (opText.includes('×') || opText.includes('x')) operator = '*';
                else if (opText.includes('÷') || opText.includes('/')) operator = '/';
            }
            if (num1span && num2span && operator) {
                const num1 = parseFloat(num1span.textContent.trim());
                const num2 = parseFloat(num2span.textContent.trim());
                let result;
                switch (operator) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 !== 0 ? num1 / num2 : ''; break;
                    default: result = '';
                }
                const dec1 = countDecimals(num1span.textContent.trim());
                const dec2 = countDecimals(num2span.textContent.trim());
                const leastDecimals = Math.max(dec1, dec2, 2);
                if (typeof result === 'number' && !isNaN(result)) {
                    result = cleanResult(result, leastDecimals);
                }
                const answerInput = bundles[2].querySelector('input.fillIn');
                if (answerInput && typeof result === 'string') {
                    answerInput.value = result;
                }
            }
        }
    });
}

function processSimpleHorizontalEquations() {
    document.querySelectorAll('div.old-space-indent').forEach(div => {
        const match = div.innerText.match(/([\d.]+)\s*([+\-×x*/÷])\s*([\d.]+)\s*=\s*$/);
        if (match) {
            let num1 = parseFloat(match[1]);
            let op = match[2];
            let num2 = parseFloat(match[3]);
            let result;
            switch (op) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '×': case 'x': case '*': result = num1 * num2; break;
                case '÷': case '/': result = num2 !== 0 ? num1 / num2 : ''; break;
                default: result = '';
            }
            let dec1 = countDecimals(match[1]);
            let dec2 = countDecimals(match[3]);
            let leastDecimals = Math.max(dec1, dec2, 2);
            if (typeof result === 'number' && !isNaN(result)) {
                result = cleanResult(result, leastDecimals);
            }
            const input = div.querySelector('input.fillIn');
            if (input && typeof result === 'string') {
                input.value = result;
            }
        }
    });
}

function processComparisonProblems() {
    document.querySelectorAll('.old-space-indent').forEach(div => {
        const tds = div.querySelectorAll('td');
        if (tds.length < 5) return;
        const leftNum = tds[0].querySelector('.old-expression');
        const leftDen = tds[1].querySelector('.old-expression');
        const rightNum1 = tds[3].querySelector('.old-expression');
        const rightDen1 = tds[4].querySelector('.old-expression');
        let rightNum2 = null, rightDen2 = null;
        let plusIdx = -1;
        tds.forEach((td, idx) => { if (td.textContent.includes('+')) plusIdx = idx; });
        if (plusIdx > 0 && tds.length > plusIdx + 2) {
            rightNum2 = tds[plusIdx + 1].querySelector('.old-expression');
            rightDen2 = tds[plusIdx + 2].querySelector('.old-expression');
        }
        if (leftNum && leftDen && rightNum1 && rightDen1) {
            const left = parseFloat(leftNum.textContent) / parseFloat(leftDen.textContent);
            let right = parseFloat(rightNum1.textContent) / parseFloat(rightDen1.textContent);
            if (rightNum2 && rightDen2) {
                right += parseFloat(rightNum2.textContent) / parseFloat(rightDen2.textContent);
            }
            let correctSign = '=';
            if (left < right) correctSign = '<';
            else if (left > right) correctSign = '>';
            document.querySelectorAll('.LaidOutTiles').forEach(laidOut => {
                laidOut.querySelectorAll('.SelectableTile').forEach(tile => {
                    const signDiv = tile.querySelector('div.GeneticallyModified > div');
                    if (signDiv && signDiv.textContent.trim() === correctSign) {
                        setTimeout(() => {
                            signDiv.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true, view: window }));
                        }, 0);
                    }
                });
            });
        }
    });
}

function removeNotes() {
    const noteSelectors = [
        '.note',
        '.notes',
        '[class*="note"]',
        '[id*="note"]',
        '[data-type*="note"]',
        '[aria-label*="note"]'
    ];
    noteSelectors.forEach(sel => {
        document.querySelectorAll(sel).forEach(el => {
            el.remove();
        });
    });
}

removeNotes();

function toggleAnswering() {
    answering = !answering;
    const btn = document.getElementById('auto-answer-btn');
    if (answering) {
        btn.textContent = 'Stop Auto Answer';
        answerQuestions();
        answerInterval = setInterval(answerQuestions, 2000);
    } else {
        btn.textContent = 'Start Auto Answer';
        clearInterval(answerInterval);
    }
}

if (!document.getElementById('auto-answer-btn')) {
    const btn = document.createElement('button');
    btn.id = 'auto-answer-btn';
    btn.textContent = 'Start Auto Answer';
    btn.style.position = 'fixed';
    btn.style.top = '10px';
    btn.style.right = '10px';
    btn.style.zIndex = 9999;
    btn.onclick = toggleAnswering;
    document.body.appendChild(btn);
}