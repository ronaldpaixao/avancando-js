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
function listClients(){
    let message = '';
    for(client of gymClients) {
        client.isPaid ? message = `[${client.plan}] ${client.name} - Pagamento em dia.`: message = `[${client.plan}] ${client.name} - Pagamento pendente.`;
        console.log(message)
    } 
}
listClients();