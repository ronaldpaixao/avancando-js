const gymClients = [
    {
        id: 1,
        name: 'Julia Costa',
        plan: 'gold',
        isPaid: true
    },
    {
        id: 2,
        name: 'Paulo Lontra',
        plan: 'gold',
        isPaid: false
    },
    {
        id: 3,
        name: 'Carla Flavia',
        plan: 'silver',
        isPaid: true
    },
]

function listClients() {
    for (client of gymClients) {
        const statusMessage = client.isPaid ? ' - Pagamento em dia.' : ' - Pagamento pendente.'
        const message = `[${client.plan.toUpperCase()}] ${client.name} ${statusMessage}`
        console.log(message);
    }
};

function findClient(id) {
    let clientFound = false;

    for (client of gymClients) {
        if (id === client.id) {
            const statusMessage = client.isPaid ? ' - Pagamento em dia.' : ' - Pagamento pendente.';
            console.log(`--- Ficha do Cliente ---`);
            console.log(`ID: ${id}`);
            console.log(`NOME: ${client.name}`);
            console.log(`PLANO: ${client.plan}`);
            console.log(`STATUS: ${statusMessage}`);
            console.log('----------------------');

            clientFound = true
            return;
        } 
    }
    if (!clientFound) {
        console.log(`Usuário com ID ${id} não encontrado.`);
    }
}

function addClient(name, plan = 'silver') {
    const nextId = gymClients.length + 1;

    gymClients.push({
        id: nextId,
        name: name,
        plan: plan,
        isPaid: true,
    });
    console.log(`Cliente ${name} adicionado com sucesso.`);
}
listClients();
addClient('Roni', 'silver')
findClient(4);
console.log(gymClients)
addClient('Maria', 'gold');
listClients();
console.log(gymClients)