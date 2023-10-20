import landscape from "../photos/landscape.png";
import nightstreet from "../photos/nightstreet.png";
import programmer from "../photos/programmer.png";

function SearchExamples() {
  return (
    <>

<section className="album py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

            <div className="col">
              <div className="card shadow-sm">
                <img src={programmer} alt="programmer" className='img-fluid'/>
                  <title>Placeholder</title>
                 <div className="card-body">
                  <p className="card-text">
                  Image of a computer programmer working in a busy office with a cup of coffee.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">more text</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src={landscape} alt="landscape" className='img-fluid'/>
                  <title>Placeholder</title>
                <div className="card-body">
                  <p className="card-text">
                  Early morning photography of a landscape shrouded in mist, with diffused light and long shadows.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">more text</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
              <img src={nightstreet} alt="street at night" className='img-fluid'/>
                  <title>Placeholder</title>
                <div className="card-body">
                  <p className="card-text">
                  Nighttime photo realistic image of a neon-lit and  downtown city street, using long exposure to capture motion of a few cars.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        View
                      </button>
                      <button
                        type="button"
                        className="btn btn-sm btn-outline-secondary"
                      >
                        Edit
                      </button>
                    </div>
                    <small className="text-body-secondary">more text</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      


    </>
  );
}

export default SearchExamples;
