// Adiciona o código para lidar com o upload do arquivo Excel
document.getElementById('uploadFile').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assume que a primeira planilha é a desejada
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Converte os dados da planilha para JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Processa os dados JSON
        processExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
}

function processExcelData(data) {
    // O data é um array de linhas, onde cada linha é um array de valores de célula
    // Pode ser necessário ajustar essa parte com base na estrutura do seu arquivo Excel
    data.forEach((row, index) => {
        if (index === 0) return; // Ignora a linha de cabeçalho, se houver

        const client = {
            nome: row[0],
            celular: row[1],
            email: row[2],
            cep: row[3],
            rua: row[4],
            bairro: row[5],
            cidade: row[6],
            estado: row[7]
        };

        createClient(client);
    });

    updateTable();
}

        // Função para exportar a tabela para um arquivo Excel
function exportTableToExcel() {
    // Seleciona a tabela de dados
    const table = document.getElementById('tableClients');

    // Converte a tabela HTML para uma planilha
    const workbook = XLSX.utils.table_to_book(table, { sheet: "Clientes" });

    // Salva o arquivo Excel
    XLSX.writeFile(workbook, 'clientes.xlsx');
}

// Adiciona o código para lidar com o upload do arquivo Excel
document.getElementById('uploadFile').addEventListener('change', handleFileSelect, false);

function handleFileSelect(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const data = new Uint8Array(e.target.result);
        const workbook = XLSX.read(data, { type: 'array' });

        // Assume que a primeira planilha é a desejada
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];

        // Converte os dados da planilha para JSON
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        // Processa os dados JSON
        processExcelData(jsonData);
    };

    reader.readAsArrayBuffer(file);
}

function processExcelData(data) {
    // O data é um array de linhas, onde cada linha é um array de valores de célula
    // Pode ser necessário ajustar essa parte com base na estrutura do seu arquivo Excel
    data.forEach((row, index) => {
        if (index === 0) return; // Ignora a linha de cabeçalho, se houver

        const client = {
            nome: row[0],
            celular: row[1],
            email: row[2],
            cep: row[3],
            rua: row[4],
            bairro: row[5],
            cidade: row[6],
            estado: row[7]
        };

        createClient(client);
    });

    updateTable();
}

function createClient(client) {
    // Implemente a lógica para adicionar o cliente ao seu sistema
    console.log('Criando cliente:', client);
}

function updateTable() {
    // Implemente a lógica para atualizar a tabela de dados no HTML
    console.log('Atualizando tabela...');
}

// Adiciona um botão para exportar a tabela
document.getElementById('exportButton').addEventListener('click', exportTableToExcel);

