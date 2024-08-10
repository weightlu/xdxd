(function() {
    const solutions = [
        { x: 5, y: 1 },
        { x: 4, y: 2 },
        { x: 3, y: 3 },
        { x: 2, y: 4 },
        { x: 1, y: 5 },
        { x: 6, y: 0 },
        { x: 0, y: 6 }
    ];

    document.getElementById('submit-btn').addEventListener('click', function() {
        const x = parseInt(document.getElementById('x').value);
        const y = parseInt(document.getElementById('y').value);

        const isCorrect = solutions.some(solution => solution.x === x && solution.y === y);

        if (isCorrect) {
            document.getElementById('submit-btn').style.backgroundColor = 'green';
            document.getElementById('result').textContent = 'ВЕРНОЕПРСТ!';
            document.getElementById('retry-btn').style.display = 'none';
            document.getElementById('next-quest-btn').style.display = 'inline';
        } else {
            document.getElementById('submit-btn').style.backgroundColor = 'red';
            document.getElementById('result').textContent = 'АХАХАХ НЕУДАЧНИК НЕПРАВИЛЬНО';
            document.getElementById('retry-btn').style.display = 'inline';
            document.getElementById('next-quest-btn').style.display = 'none';
        }
    });

    document.getElementById('retry-btn').addEventListener('click', function() {
        document.getElementById('x').value = '';
        document.getElementById('y').value = '';
        document.getElementById('submit-btn').style.backgroundColor = '';
        document.getElementById('result').textContent = '';
        document.getElementById('retry-btn').style.display = 'none';
        document.getElementById('next-quest-btn').style.display = 'none';
    });

    document.getElementById('next-quest-btn').addEventListener('click', function() {
        window.location.href = 'quest2.html';
    });
})();