let game = [['','',''],['','',''],['','','']];
let win_message = document.querySelector('#win-message');

function check_game()
{
    console.log(game);
    for (line of game)
    {
        if (line[0] === line[1] && line[1] === line[2] && line[0] !== '')
        {
            return line[0];
        }
    }
    for (let i = 0; i < 3; i++)
    {
        if (game[0][i] === game[1][i] && game[1][i] === game[2][i] && game[0][i] !== '')
        {
            return game[0][i];
        }
    }
    if (game[1][1]!== '' && (game[0][0] === game[1][1] && game[1][1] === game[2][2] || game[0][2] === game[1][1] && game[1][1] === game[2][0]))
    {
        return game[1][1];
    }
    return false;
}

let clicks = 0;

function clicked(cell)
{
    cell.addEventListener('click',function()
    {
        if (cell.textContent === '')
        {
            if (clicks % 2 === 0)
            {
                cell.textContent = 'X';
                game[Math.floor(squares.indexOf(cell)/3)][squares.indexOf(cell) % 3] = 'X';
            }
            else
            {
                cell.textContent = 'O';
                game[Math.floor(squares.indexOf(cell)/3)][squares.indexOf(cell) % 3] = 'O';
            }
            clicks++;
        }
        let winner = check_game()
        if (winner)
        {
            win_message.children[0].textContent = `${winner} won.`;
            win_message.style.display = 'block';
            window.scrollTo(0,document.body.scrollHeight);
        }
    })
}

squares = Array.from(document.querySelectorAll('td'));

for (square of squares)
{
    clicked(square);
}

restart = document.querySelector('#restart-button');

restart.addEventListener('click',function()
{
    clicks = 0;
    game = [['','',''],['','',''],['','','']];
    for (square of squares)
    {
        square.textContent = '';
    }
    if (win_message.children[0].textContent)
    {
        win_message.children[0].textContent = '';
        win_message.style.display = 'none';
        window.scrollTo(0,0);
    }
})