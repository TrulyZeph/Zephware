javascript:(function(){
  if (!document.getElementById('fredoka-font-link')) {
    const link = document.createElement('link');
    link.id = 'fredoka-font-link';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Fredoka&display=swap';
    document.head.appendChild(link);
}

(function() {
  const style = document.createElement('style');
  style.textContent = `
    body, #zw-overlay, #zw-overlay *, .header, .description, .input-area, .input-area *, .content, .label-text, select, button {
      font-family: 'Fredoka', sans-serif !important;
    }
    #zw-overlay {
      z-index: 99999 !important;
      font-family: 'Fredoka', sans-serif !important;
    }
    #zw-overlay-box {
      font-family: 'Fredoka', sans-serif !important;
    }
    .zw-hide-scrollbar::-webkit-scrollbar { display: none; }
    .zw-hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
  `;
  document.head.appendChild(style);
})();

const style = document.createElement('style');
style.textContent = `
#zw-overlay {
      position: fixed;
      top: 0; left: 0;
      width: 100vw; height: 100vh;
      z-index: 3;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    #zw-overlay-box {
      background: rgba(17, 17, 17, 0.95);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 16px;
      padding: 32px;
      max-width: 520px;
      width: 90%;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
      text-align: center;
    }
    #zw-overlay-box h1 {
      font-size: 24px;
      color: #01AEFD;
      margin-bottom: 16px;
    }
    #zw-overlay-box p {
      color: white;
      margin-bottom: 24px;
    }
    #zw-overlay-box button {
      font-size: 16px;
      font-family: 'Fredoka', sans-serif;
      padding: 10px 20px;
      border: none;
      border-radius: 10px;
      background-color: #01AEFD;
      color: white;
      cursor: pointer;
    }
    .input-area {
      position: fixed;
      top: 26em;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      color: #000000;
      gap: 0.5em;
      z-index: 100;
    }

    .input-area .label-text {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.4em;
      color: #ddd;
      font-weight: 500;
      user-select: none;
      white-space: nowrap;
    }

    .input-area select {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.2em;
      font-weight: 500;
      color: #01AEFD;
      padding: 0.3em 0.6em;
      border: none;
      border-radius: 5px;
      outline: none;
      background-color:rgb(42, 42, 42);
      cursor: pointer;
      width: 180px;
    }

    .input-area button {
      font-family: 'Fredoka', sans-serif;
      font-size: 1.2em;
      padding: 0.4em 1em;
      border: none;
      border-radius: 5px;
      background: linear-gradient(to bottom, #01AEFD, #015AFD);
      color: white;
      font-weight: bold;
      cursor: pointer;
      transition: none;
    }
`;
})();

function parseNumberSafe(numStr) {
    if (typeof numStr !== 'string' ) numStr = String(numStr);
    return parseFloat(numStr.replace(/,/g, ''));
}

function createUI() {
    if (document.getElementById('main-ui')) return;
    const panel = document.createElement('div');
    panel.id = 'main-ui';
    panel.style.position = 'fixed';
    panel.style.width = '220px';
    panel.style.background = 'rgba(30,30,30,0.95)';
    panel.style.color = '#fff';
    panel.style.border = '1px solid #888';
    panel.style.borderRadius = '8px';
    panel.style.zIndex = 9999;
    panel.style.fontSize = '13px';
    panel.style.padding = '10px';
    panel.style.boxShadow = '0 2px 8px #0006';
    panel.style.cursor = 'move';
    panel.style.userSelect = 'none';
    panel.style.display = 'flex';
    panel.style.flexDirection = 'column';
    panel.style.gap = '8px';

    let offsetX, offsetY, dragging = false;
    panel.addEventListener('mousedown', function(e) {
        if (e.target !== panel && e.target.tagName !== 'H1') return;
        dragging = true;
        offsetX = e.clientX - panel.getBoundingClientRect().left;
        offsetY = e.clientY - panel.getBoundingClientRect().top;
        panel.style.transition = 'none';
        document.body.style.userSelect = 'none';
    });
    document.addEventListener('mousemove', function(e) {
        if (!dragging) return;
        panel.style.left = (e.clientX - offsetX) + 'px';
        panel.style.top = (e.clientY - offsetY) + 'px';
        panel.style.right = '';
    });
    document.addEventListener('mouseup', function(e) {
        if (!dragging) return;
        dragging = false;
        panel.style.transition = '';
        document.body.style.userSelect = '';
    });

    panel.addEventListener('touchstart', function(e) {
        if (e.target !== panel && e.target.tagName !== 'H1') return;
        dragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - panel.getBoundingClientRect().left;
        offsetY = touch.clientY - panel.getBoundingClientRect().top;
        panel.style.transition = 'none';
    }, {passive: false});
    document.addEventListener('touchmove', function(e) {
        if (!dragging) return;
        const touch = e.touches[0];
        panel.style.left = (touch.clientX - offsetX) + 'px';
        panel.style.top = (touch.clientY - offsetY) + 'px';
        panel.style.right = '';
        e.preventDefault();
    }, {passive: false});
    document.addEventListener('touchend', function(e) {
        if (!dragging) return;
        dragging = false;
        panel.style.transition = '';
    });

    const header = document.createElement('h1');
    header.textContent = 'Zephware';
    header.style.color = '#01AEFD';
    header.style.fontSize = '1.2em';
    header.style.margin = '0 0 6px 0';
    header.style.textAlign = 'center';
    panel.appendChild(header);

    const divider = document.createElement('hr');
    divider.style.border = '0';
    divider.style.borderTop = '2px solid #01AEFD';
    divider.style.borderRadius = '4px';
    divider.style.margin = '-7.5px 0 10px 0';
    divider.style.width = '90%';
    divider.style.alignSelf = 'center';
    panel.appendChild(divider);

    const inputArea = document.createElement('div');
    inputArea.className = 'input-area';
    inputArea.style.position = 'static';
    inputArea.style.transform = 'none';
    inputArea.style.display = 'flex';
    inputArea.style.flexDirection = 'column';
    inputArea.style.gap = '6px';
    inputArea.style.alignItems = 'flex-start';
    inputArea.style.color = '#ddd';
    inputArea.style.background = 'transparent';

    const delayLabel = document.createElement('label');
    delayLabel.className = 'label-text';
    delayLabel.style.fontSize = '1em';
    delayLabel.style.color = '#ddd';
    delayLabel.textContent = 'Set Delay (ms):';
    const delayInput = document.createElement('input');
    delayInput.type = 'text';
    delayInput.inputMode = 'numeric';
    delayInput.pattern = '[0-9]*';
    delayInput.value = window.autoAnswerDelay || 2000;
    delayInput.style.width = '80px';
    delayInput.style.fontSize = '1em';
    delayInput.style.borderRadius = '5px';
    delayInput.style.border = 'none';
    delayInput.style.background = '#222';
    delayInput.style.color = '#01AEFD';
    delayInput.style.padding = '2px 8px';
    delayInput.style.marginLeft = '6px';
    delayInput.addEventListener('input', function() {
        delayInput.value = delayInput.value.replace(/[^0-9]/g, '');
    });
    delayInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            window.autoAnswerDelay = parseInt(delayInput.value) || 2000;
            if (window.answering) {
                clearInterval(window.answerInterval);
                window.answerInterval = setInterval(answerQuestions, window.autoAnswerDelay);
            }
        }
    });
    delayLabel.appendChild(delayInput);
    const accLabel = document.createElement('label');
    accLabel.className = 'label-text';
    accLabel.style.fontSize = '1em';
    accLabel.style.color = '#ddd';
    accLabel.textContent = 'Set Accuracy (%):';
    const accInput = document.createElement('input');
    accInput.type = 'text';
    accInput.inputMode = 'numeric';
    accInput.pattern = '[0-9]*';
    accInput.value = window.autoAnswerAccuracy || 100;
    accInput.style.width = '60px';
    accInput.style.fontSize = '1em';
    accInput.style.borderRadius = '5px';
    accInput.style.border = 'none';
    accInput.style.background = '#222';
    accInput.style.color = '#01AEFD';
    accInput.style.padding = '2px 8px';
    accInput.style.marginLeft = '6px';
    accInput.addEventListener('input', function() {
        accInput.value = accInput.value.replace(/[^0-9]/g, '');
    });
    accInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            window.autoAnswerAccuracy = parseInt(accInput.value) || 100;
        }
    });
    accLabel.appendChild(accInput);
    inputArea.appendChild(delayLabel);
    inputArea.appendChild(accLabel);

    const updateBtn = document.createElement('button');
    updateBtn.textContent = 'Save Settings';
    updateBtn.style.fontSize = '1em';
    updateBtn.style.marginTop = '6px';
    updateBtn.style.background = '#015AFD';
    updateBtn.style.color = '#fff';
    updateBtn.style.border = 'none';
    updateBtn.style.borderRadius = '5px';
    updateBtn.style.padding = '6px 12px';
    updateBtn.style.cursor = 'pointer';
    updateBtn.style.transition = 'background-color 0.2s';
    updateBtn.style.alignSelf = 'center';
    updateBtn.addEventListener('click', getInputValues);
    function getInputValues() {
        window.autoAnswerDelay = parseInt(delayInput.value);
        window.autoAnswerAccuracy = parseInt(accInput.value);
        if (!window.answering) {
            clearInterval(window.answerInterval);
            window.answerInterval = setInterval(answerQuestions, window.autoAnswerDelay);
        }
    };
    inputArea.appendChild(updateBtn);
    panel.appendChild(inputArea);

    const btn = document.createElement('button');
    btn.id = 'auto-answer-btn';
    btn.textContent = 'Start Auto Answer';
    btn.style.fontSize = '16px';
    btn.style.fontFamily = "'Fredoka',sans-serif";
    btn.style.padding = '10px 20px';
    btn.style.border = 'none';
    btn.style.borderRadius = '10px';
    btn.style.backgroundColor = '#01AEFD';
    btn.style.color = 'white';
    btn.style.cursor = 'pointer';
    btn.style.marginTop = '10px';
    btn.style.width = '100%';
    panel.appendChild(btn);
    document.body.appendChild(panel);
    btn.removeEventListener('click', toggleAnswering);
    btn.addEventListener('click', toggleAnswering);
}

if (!document.getElementById('main-ui')) {
    createUI();
}

window.answering = window.answering || false;
window.answerInterval = window.answerInterval || null;

function toggleAnswering() {
    window.answering = !window.answering;
    const btn = document.getElementById('auto-answer-btn');
    if (window.answering) {
        btn.textContent = 'Stop Auto Answer';
        answerQuestions();
        let delay = window.autoAnswerDelay || 2000;
        window.answerInterval = setInterval(answerQuestions, delay);
    } else {
        btn.textContent = 'Start Auto Answer';
        clearInterval(window.answerInterval);
    }
}

function answerQuestions() {
    if (window.autoAnswerAccuracy && window.autoAnswerAccuracy < 100) {
        if (Math.random() * 100 > window.autoAnswerAccuracy) return;
    }
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
            let num1 = parseNumberSafe(num1str);
            let num2 = parseNumberSafe(num2str);
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
            const divisor = parseNumberSafe(divisorStr);
            const dividend = parseNumberSafe(dividendStr);
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
            let num1 = parseNumberSafe(num1str);
            let num2 = parseNumberSafe(num2str);
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

function getOperandValue(bundle) {
    const expDiv = bundle.querySelector('.expression.wholeExp');
    if (expDiv) {
        const baseSpan = expDiv.querySelector('.expression.base .expression.number');
        const expSpan = expDiv.querySelector('.expression.exponent .expression.number');
        if (baseSpan && expSpan) {
            const base = parseNumberSafe(baseSpan.textContent.trim());
            const exp = parseNumberSafe(expSpan.textContent.trim());
            return Math.pow(base, exp);
        }
    }
    const numSpan = bundle.querySelector('.expression.number');
    if (numSpan) return parseNumberSafe(numSpan.textContent.trim());
    return NaN;
}

function countDecimals(numStr) {
    if (typeof numStr !== "string") numStr = String(numStr);
    if (numStr.includes('.')) {
        return numStr.split('.')[1].length;
    }
    return 0;
}

function cleanResult(num, decimals) {
    if (typeof num === "number") num = num.toString();
    if (num.includes('e')) return Number(num).toPrecision(decimals + 1).replace(/\.?0+$/, '');
    let n = Number(num);
    if (isNaN(n)) return '';
    if (Number.isInteger(n)) return n.toString();
    let str = n.toFixed(decimals !== undefined ? decimals : 10);
    str = str.replace(/(\.\d*?[1-9])0+$/g, '$1').replace(/\.0+$/, '');
    if (/\.\d{3,}/.test(str)) str = n.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    return str;
}

function processHorizontalBinary() {
   document.querySelectorAll('.math.section').forEach(section => {
      const bundles = section.querySelectorAll('.bundle');
      if (bundles.length >= 3) {
         let exprParts = [];
         for (let i = 0; i < bundles.length - 1; i++) {
            let num = getOperandValue(bundles[i]);
            if (!isNaN(num)) {
               exprParts.push(num);
            } else {
               if (bundles[i].querySelector('.minusSymbolContainer')) exprParts.push('-');
               else if (bundles[i].querySelector('.plusSymbolContainer')) exprParts.push('+');
               else if (bundles[i].querySelector('.xSymbolContainer')) exprParts.push('*');
               else if (bundles[i].querySelector('.divideSymbolContainer')) exprParts.push('/');
               else {
                  let txt = bundles[i].textContent;
                  if (txt.includes('-') || txt.includes('–')) exprParts.push('-');
                  else if (txt.includes('+')) exprParts.push('+');
                  else if (txt.includes('×') || txt.includes('x')) exprParts.push('*');
                  else if (txt.includes('÷') || txt.includes('/')) exprParts.push('/');
               }
            }
         }

         let expr = exprParts.join(' ');
         let result;
         try {
            result = Function('"use strict";return (' + expr + ')')();
         } catch (e) {
            result = '';
         }

         if (typeof result === 'number' && !isNaN(result)) {
            let numbers = expr.match(/-?\d+(\.\d+)?/g) || [];
            let maxDecimals = Math.max(...numbers.map(n => countDecimals(n)), 2);
            result = cleanResult(result, maxDecimals);
         }

         const answerInput = bundles[bundles.length - 1].querySelector('input.fillIn');
         if (answerInput && typeof result === 'string') {
            answerInput.value = result;
         }
      }
   });
}

function processSimpleHorizontalEquations() {
   document.querySelectorAll('div.old-space-indent').forEach(div => {
      let text = '';
      div.childNodes.forEach(node => {
         if (node.nodeType === Node.TEXT_NODE) text += node.textContent;
         if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SPAN') {
            const sup = node.querySelector('sup.negative.old-negative-sign');
            if (sup) {
               text += '-';
               const num = node.textContent.replace(/[–-]/g, '').replace(/^\s*-?/, '').trim();
               text += num;
            } else {
               text += node.textContent;
            }
         }
         if (node.nodeType === Node.ELEMENT_NODE && node.tagName === 'SUP' && node.classList.contains('negative') && node.classList.contains('old-negative-sign')) {
            text += '-';
         }
      });

      text = text.replace(/–/g, '-').replace(/−/g, '-').replace(/\u2212/g, '-').replace(/\s+/g, ' ').trim();

      const match = text.match(/^(.*?)=\s*$/);
      if (match) {
         let expr = match[1].trim();

         expr = expr.replace(/×|x/g, '*').replace(/÷/g, '/');

         let result;
         try {
            result = Function('"use strict";return (' + expr + ')')();
         } catch (e) {
            result = '';
         }

         if (typeof result === 'number' && !isNaN(result)) {
            let numbers = expr.match(/-?\d+(\.\d+)?/g) || [];
            let maxDecimals = Math.max(...numbers.map(n => countDecimals(n)), 2);
            result = cleanResult(result, maxDecimals);
         }

         const input = div.querySelector('input.fillIn');
         if (input && typeof result === 'string') {
            input.value = result;
         }
      }
   });
}
