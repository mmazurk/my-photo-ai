function LoadingIcon() {
  return (
    <section className="pt-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="display-5 fw-bold">Loading Your Photo</h1>
          <div className="spinner-border" role="status"></div>
          <div className="row"></div>
          <div className="row py-2"></div>
        </div>
      </div>
    </section>
  );
}

export default LoadingIcon;
