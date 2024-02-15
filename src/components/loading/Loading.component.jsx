import ClayLoadingIndicator from "@clayui/loading-indicator";

const LoadingComponent = () => {
  <div style={{height:"100%", justifyContent:"center" }}>
    <div>
      <ClayLoadingIndicator displayType="primary" shape="squares" size="lg" />
    </div>
  </div>;
};

export default LoadingComponent;
