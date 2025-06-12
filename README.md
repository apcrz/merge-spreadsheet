# Merge Spreadsheets

Este script em **Node.js** mescla várias planilhas do Excel (`.xlsx`) em uma única planilha. Ele lê todos os arquivos da pasta spreadsheets, **mas só pega a primeira planilha de cada arquivo**. Essa abordagem foi escolhida por uma necessidade específica do momento, mas pode ser facilmente expandida para pegar mais de uma planilha de cada arquivo com poucas linhas de código. O resultado final é um novo arquivo Excel com todos os dados combinados de forma consistente.



## Como utilizar

1. Prepare as planilhas: Coloque todos os arquivos `.xlsx` que você quer combinar dentro de uma pasta chamada `spreadsheets`.

2. Execute o script: Depois de preparar os arquivos, basta executar o script com o comando:

```
node merge_spreadsheets.js
```

3. Resultado: O script criará um novo arquivo chamado `final_spreadsheet.xlsx`, contendo todos os dados mesclados das planilhas.

## O que o script faz

* Lê todas as planilhas na pasta `spreadsheets`.

* Combina os dados de cada uma, mantendo as colunas na mesma ordem.

* Cria um novo arquivo Excel com todos os dados combinados.

## Dependências

Este script requer o Node.js instalado em sua máquina. Você pode baixar a versão mais recente do Node.js em [nodejs.org](https://nodejs.org/).

Além disso, o script usa a biblioteca `xlsx` para ler e escrever arquivos Excel. Para instalar, rode:

```
pnpm add xlsx
```

## Licença

Esse projeto é livre para usar e modificar. Veja a licença completa no arquivo [LICENSE](LICENSE).

