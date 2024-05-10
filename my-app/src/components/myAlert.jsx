import { useState } from "react";

import { Alert, AlertHeading, Button } from "react-bootstrap";

const AlertDismissable = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <AlertHeading>My Alert</AlertHeading>
        <p>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
          lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
          fermentum.
        </p>
        <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
                Close Me
            </Button>
        </div>
      </Alert>

      {!show && <Button onClick={() => setShow(true)} variant="outline-primary">Show Me</Button>}
    </>
  );
};

export default AlertDismissable;
