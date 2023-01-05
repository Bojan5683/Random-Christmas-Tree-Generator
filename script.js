let container = document.getElementById('container');

function randomNumber() {
    let random = Math.floor(Math.random() * 25 + 1);
    
    for(let i = 0; i <= random; i++){
        let createElement = document.createElement('div');
        let createElement2 = document.createElement('span');
        let createElement3 = document.createElement('span');
        let createElement4 = document.createElement('span');
        let createElement5 = document.createElement('span');
        
        container.appendChild(createElement) + i;
        container.appendChild(createElement2) + i;
        container.appendChild(createElement3) + i;
        container.appendChild(createElement4) + i;
        container.appendChild(createElement5) + i;

        createElement.classList.add('tree');
        createElement2.classList.add('trunk');
        createElement3.classList.add('first');
        createElement4.classList.add('second');
        createElement5.classList.add('third');
    }

    let treeClass = document.querySelectorAll('.tree');

    for(let i = 0; i <= random; i++){
        treeClass[i].addEventListener('mouseover', (e) => {
            e.target.style.borderTop = '100px solid yellow';
        })

        treeClass[i].addEventListener('mouseout', (e) => {
            e.target.style.borderTop = '100px solid green';
        })
    }

};

randomNumber();
