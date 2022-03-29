import "./../styles.css";

export default function App() {
  const renderHeader = () => (
    <div>
      <button>sssss</button>
      <button>sssss</button>
      <button>sssss</button>
    </div>
  );

  const renderContent = () => (
    <div>
      <div class="box">
        <ul>
          <li>a</li>
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
