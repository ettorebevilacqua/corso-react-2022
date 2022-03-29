import "./styles.css";
import { menuHeader, menuProdotti, contenutoList } from "./config";
import { renderHeader } from "./header";
import { renderMenuLeft } from "./menuLeft";
import { renderContent } from "./content";
import { renderFooter } from "./footer";

export default function App() {
  return (
    <div className="App">
      {renderHeader(menuHeader)}
      <div class="box s30 secondBg">{renderMenuLeft(menuProdotti)}</div>
      <div class="box s66 ">{renderContent(contenutoList)}</div>
      {renderFooter()}
    </div>
  );
}
