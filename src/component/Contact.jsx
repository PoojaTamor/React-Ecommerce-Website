import React from 'react'

const Contact = () => {
  return (
    <>

    <div className="map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd"
        height={500}
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex={0}
      />
    </div>
    {/* Map End */}
    {/* Contact Section Begin */}
    

  <section className="contact py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-6 col-md-6">
          <div className="p-3">
            <div className="section-title mb-4 footersection">
              <span className="d-block text-uppercase text-secondary mb-2">
                Information
              </span>
              <h2>Contact Us</h2>
              <p>
                As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention.
              </p>
            </div>
            <ul className="list-unstyled">
              <li className="mb-3">
                <h4>America</h4>
                <p>
                  195 E Parker Square Dr, Parker, CO 801 <br />
                  +43 982-314-0958
                </p>
              </li>
              <li>
                <h4>France</h4>
                <p>
                  109 Avenue Léon, 63 Clermont-Ferrand <br />
                  +12 345-423-9893
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact__form p-3">
            <form action="#">
              <div className="row gx-3">
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                  />
                </div>
                <div className="col-lg-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-lg-12">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows={4}
                    defaultValue={""}
                  />
                  <button type="submit" className="btn btn-danger mt-3">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

     </>
  
  )
}

export default Contact
