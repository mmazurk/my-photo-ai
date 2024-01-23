import classes from "./search-examples.module.css";
import Image from "next/image";

function SearchExamples() {
  const sampleImages = [
    {
      name: "programmer",
      description:
        "Image of a computer programmer working in a busy office with a cup of coffee.",
    },
    {
      name: "landscape",
      description:
        "Early morning photography of a landscape shrouded in mist, with diffused light and long shadows.",
    },
    {
      name: "nightstreet",
      description:
        "Nighttime photo realistic image of a neon-lit and downtown city street, using long exposure to capture motion of a few cars.",
    },
  ];

  return (
    <>
      <section className="album py-2">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {sampleImages.map((imageSet) => {
              return (
                <div className="col" key={imageSet.name}>
                  <div className="card shadow-sm">
                    <img src={`${imageSet.name}.png`} alt={imageSet.name} />
                    <div className="card-body">
                      <p className="card-text">{imageSet.description}</p>
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
              );
            })}

            {/* <div className="col">
              <div className="card shadow-sm">
                <div className={classes.imageContainer}>
                  <Image
                    src="/programmer.png"
                    alt="programmer"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                    priority={true}
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    Image of a computer programmer working in a busy office with
                    a cup of coffee.
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
                <img src="/landscape.png" alt="landscape" />
                <div className="card-body">
                  <p className="card-text">
                    Early morning photography of a landscape shrouded in mist,
                    with diffused light and long shadows.
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
                <img src="/nightstreet.png" alt="street at night" />
                <div className="card-body">
                  <p className="card-text">
                    Nighttime photo realistic image of a neon-lit and downtown
                    city street, using long exposure to capture motion of a few
                    cars.
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
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
}

export default SearchExamples;
