export const renderHeader = (menuHeader) => {
  const renderLink = (title) => (
    <a href="{link}" class="button">
      {title}
    </a>
  );
  return (
    <div class="box s100 firsBg">
      <div class="box s30">First React</div>
      <div class="box s50 right">{menuHeader.map(renderLink)}</div>
    </div>
  );
};
