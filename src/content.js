export const renderContent = (contenutoList) => (
  <>
    <div class="box s100 firsBg">titolo contenuto</div>
    <div class="box s100">
      {contenutoList.map((testo, idx) => (
        <p>{testo}</p>
      ))}
    </div>
  </>
);
