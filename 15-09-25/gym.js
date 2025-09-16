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
    let clientFinded = false;

    for (client of gymClients) {
        if (id === client.id) {
            const statusMessage = client.isPaid ? ' - Pagamento em dia.' : ' - Pagamento pendente.';
            console.log(`--- Ficha do Cliente ---`);
            console.log(`ID: ${id}`);
            console.log(`NOME: ${client.name}`);
            console.log(`PLANO: ${client.plan}`);
            console.log(`STATUS: ${statusMessage}`);
            console.log('----------------------');

            return clientFinded = true;
        }
    }
    if (!clientFinded) {
        console.log(`Usuário com ID ${id} não encontrado.`);
    }
}


listClients();

findClient(4);