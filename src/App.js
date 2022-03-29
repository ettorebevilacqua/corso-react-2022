import { renderHeader } from "./a";
import "./styles.css";

export default function App() {
  const renderContent = () => (
    <div>
      <div class="box">
        <ul>
          <li>xxxx{renderHeader()}</li>
          <li>a</li>
          <li>a</li>
        </ul>
      </div>
      <div class="box">Contet</div>
    </div>
  );

  const renderFooter = () => <div>fotter </div>;

  return (
    <div>
      {renderHeader()}
      {renderContent()}
      {renderFooter()}
    </div>
  );
}
