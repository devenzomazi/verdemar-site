# Verde Mar Biojoias

Site institucional para o artesão de biojoias "Verde Mar Biojoias". Este projeto foi criado com React + Vite para uma base rápida e responsiva, agora evoluído com conteúdo estruturado e educativo.

## Tecnologias Utilizadas

- React
- Vite
- React Router DOM
- Bootstrap
- CSS

## Estrutura do Projeto

- `src/components/`: Componentes reutilizáveis (Navbar, Footer, CardProduto, MaterialCard, SobreBiojoias, Cuidados)
- `src/pages/`: Páginas do site (Home, Produtos, Materiais, Sobre, ContatoAgenda)
- `src/data/`: Dados mockados (produtos.js, materiais.js, eventos.js)
- `src/routes.jsx`: Definição das rotas

## Funcionalidades

- **Home**: Banner da marca, seção explicativa sobre biojoias, botões de navegação
- **Produtos**: Catálogo visual de produtos com imagens, descrições e botões para contato e ver materiais
- **Materiais**: Exibição detalhada dos materiais utilizados (origem, época, significado), materiais complementares e cuidados. Grid responsivo com imagens reais.
- **Sobre**: História do artesão
- **Agenda e Contato**: Eventos e informações de contato com WhatsApp

## Imagens

As imagens dos materiais estão localizadas em `public/materiais/`. Adicione as imagens correspondentes aos nomes dos arquivos (ex: guarapuvu.jpg). Em caso de imagem ausente, será exibido um placeholder.

## Como Executar

1. Instale as dependências:
   ```bash
   npm install
   ```

2. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

3. Abra [http://localhost:5173](http://localhost:5173) no navegador.

## Build para Produção

```bash
npm run build
```

## Conteúdo Educativo

O site agora inclui informações detalhadas sobre biojoias, materiais sustentáveis brasileiros, cuidados com as peças e simbolismos, transformando-o em um catálogo profissional e informativo.

## Próximos Passos

- Substituir imagens placeholder por imagens reais
- Adicionar mais produtos e materiais
- Implementar filtros e busca no catálogo
- Integrar com backend para dados dinâmicos
