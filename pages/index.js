import React from "react";
import Head from "next/head";

import { Modal, Card, Form, Button } from "react-bulma-components";

const { Field, Control, Label, Input } = Form;

export default function Home() {
  const [modalState, setModalState] = React.useState(false);

  const toggleModal = () => setModalState(!modalState);

  return (
    <>
      <Button onClick={toggleModal}>Signup</Button>
      <Modal className="signup" show={modalState} onClose={toggleModal}>
        <Card>
          <Card.Content>
            <h4 className="is-size-4">Signup</h4>
            <Field>
              <Label>Nickname</Label>
              <Control>
                <Input type="text" />
              </Control>
            </Field>
            <Field>
              <Label>Email</Label>
              <Control>
                <Input type="email" />
              </Control>
            </Field>
            <Field>
              <Label>Password</Label>
              <Control>
                <Input type="password" />
              </Control>
            </Field>
            <Field>
              <Control>
                <Button>Create Account</Button>
              </Control>
            </Field>
          </Card.Content>
        </Card>
      </Modal>
    </>
  );
}
