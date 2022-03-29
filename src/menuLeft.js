export const renderMenuLeft = (menuProdotti) => {
  const renderLink = (prodotto) => (
    <li>
      <a href="somepage.html" class="button">
        {prodotto}
      </a>
    </li>
  );

  return <ul>{menuProdotti.map(renderLink)}</ul>;
};
