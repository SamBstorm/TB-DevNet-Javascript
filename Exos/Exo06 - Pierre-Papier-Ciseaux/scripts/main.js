do {
    let cpu_choice = Math.round((Math.random() * 2) + 1);
    let player_choice;
    do {
        player_choice = parseInt(prompt('Veuillez faire un choix :\n\t1) Pierre\n\t2) Papier\n\t3) Ciseaux'));
    } while (isNaN(player_choice) || player_choice > 3 || player_choice < 1);
    let cpu;
    let player;
    switch (cpu_choice) {
        case 1:
            cpu = "Pierre";
            break;
        case 2:
            cpu = "Papier";
            break;
        default:
            cpu = "Ciseaux";
            break;
    }
    switch (player_choice) {
        case 1:
            player = "Pierre";
            break;
        case 2:
            player = "Papier";
            break;
        default:
            player = "Ciseaux";
            break;
    }
    let result;
    if (cpu_choice === player_choice) result = "Égalité.";
    else if (
        (cpu_choice === 1 && player_choice === 3) ||
        (cpu_choice === 2 && player_choice === 1) ||
        (cpu_choice === 3 && player_choice === 2)) result = "Perdu..."
    else result = "Gagné!"
    alert(`player : ${player} - cpu : ${cpu} => ${result}`);
} while (confirm('Une nouvelle partie?'));