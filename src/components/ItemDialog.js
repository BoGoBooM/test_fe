import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle, Button, TextField } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const ItemSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
});

function ItemDialog({ open, item, onClose, onSubmit }) {
  return (
    <Dialog open={open} onClose={onClose}>
      <Formik
        initialValues={{ name: item?.name || '' }}
        validationSchema={ItemSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmit(values);
          resetForm();
          onClose();
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <DialogTitle>{item ? 'Edit Item' : 'Add Item'}</DialogTitle>
            <DialogContent>
              <Field
                as={TextField}
                name="name"
                label="Name"
                fullWidth
                margin="normal"
                error={touched.name && Boolean(errors.name)}
                helperText={touched.name && errors.name}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={onClose} color="secondary">
                Cancel
              </Button>
              <Button type="submit" color="primary">
                Save
              </Button>
            </DialogActions>
          </Form>
        )}
      </Formik>
    </Dialog>
  );
}

export default ItemDialog;
