// import Data from "../data/filmdata";
// import { useState } from "react";

function Filmai(props) {
  const FID = props.filmai.FID;
  const title = props.filmai.title;
  const description = props.filmai.description;
  const category = props.filmai.category;
  const price = props.filmai.price;
  const length = props.filmai.length;
  const rating = props.filmai.rating;
  const actors = props.filmai.actors;

  return (
    <div class="col-md-4 pt-2">
      <div class="card text-black mt-2 p-1 ">
        <div class="card-header bg-secondary bg-opacity-25 fw-bold fs-4">
          {FID}. {title}
          <hr></hr>
          <div class="card-body bg-success bg-opacity-25 d-flex flex-column justify-content-center pt-1">
            <p class=" fs-6">Kategorija: {category}</p>
            <hr></hr>
            <p class="fs-6">
              Filmo ilgis: {length} min.
              <br></br>
              Reitingai: {rating}
            </p>
            <hr></hr>
            <h6 className="text-decoration-underline fw-bold fs-5 fs-6">
              Aktoriai:{" "}
            </h6>

            <div className="row-1">
              <p class="fs-6 fw-normal ">{actors}</p>
              <hr></hr>
            </div>
            <h6 className="text-decoration-underline fw-bold fs-5 pb-2">
              Aprašymas:
            </h6>
            <p class="fs-6 fw-normal mb-3">{description}</p>
            <hr></hr>
            <span class="fw-bold  fs-3 mb-2"> Kaina: {price} Eur</span>
            <button
              type="button"
              className="btn  btn-success mx-auto p-2 fw-bold fs-5 col-5 t.aligne-center "
            >
              Pasirinkti
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Filmai;
