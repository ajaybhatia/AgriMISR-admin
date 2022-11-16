import * as Yup from "yup";

import {
  Badge,
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { FaPencilAlt, FaPlus, FaTrashAlt } from "react-icons/fa";
import React, { useMemo, useState } from "react";

import DataTable from "react-data-table-component";
import { useFormik } from "formik";

const CropList = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [data, setData] = useState([
    {
      id: 1,
      name: "Apple",
      category: "Fruits",
      isActive: true,
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      isActive: true,
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruits",
      isActive: true,
    },
    {
      id: 4,
      name: "Lemon",
      category: "Fruits",
      isActive: false,
    },
    {
      id: 5,
      name: "Grapes",
      category: "Fruits",
      isActive: true,
    },
    {
      id: 6,
      name: "Pineapple",
      category: "Fruits",
      isActive: true,
    },
    {
      id: 7,
      name: "Potato",
      category: "Vegetables",
      isActive: false,
    },
    {
      id: 8,
      name: "Tomato",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 9,
      name: "Onion",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 10,
      name: "Garlic",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 11,
      name: "Carrot",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 12,
      name: "Cucumber",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 13,
      name: "Cabbage",
      category: "Vegetables",
      isActive: true,
    },
    {
      id: 14,
      name: "Rose",
      category: "Flowers",
      isActive: true,
    },
    {
      id: 15,
      name: "Lily",
      category: "Flowers",
      isActive: true,
    },
  ]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setValues,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      id: "",
      name: "",
      category: "",
      isActive: true,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(5, "Name should have minimum 5 characters")
        .required("Name is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
      resetForm();
    },
  });

  const columns = useMemo(
    () => [
      {
        name: "#",
        cell: (_, index) => <div>{index + 1}</div>,
      },
      {
        name: "Name",
        selector: (row) => row.name,
      },
      {
        name: "Category",
        selector: (row) => row.category,
      },
      {
        name: "Is Active",
        selector: (row) => row.isActive,
        center: true,
        cell: (row) =>
          row.isActive ? (
            <Badge color="success" pill>
              Active
            </Badge>
          ) : (
            <Badge color="danger" pill>
              Inactive
            </Badge>
          ),
      },
      {
        name: "Actions",
        center: true,
        cell: (row) => (
          <div className="d-flex">
            <Button
              color="primary"
              size="sm"
              className="me-2"
              onClick={() => {
                setValues(row);
                setShowFormModal(true);
              }}
            >
              <FaPencilAlt />
            </Button>
            <Button
              color="danger"
              size="sm"
              onClick={() => {
                setValues(row);
                setShowDeleteModal(true);
              }}
            >
              <FaTrashAlt />
            </Button>
          </div>
        ),
      },
    ],
    [setValues]
  );

  const onDelete = () => {
    setData(data.filter((item) => item.id !== values.id));
    setShowDeleteModal(false);
  };

  return (
    <div>
      <h3>Crop List</h3>
      <div>
        <Button
          color="success"
          onClick={() => {
            resetForm();
            setShowFormModal(true);
          }}
        >
          <FaPlus className="me-2" />
          New Crop
        </Button>
      </div>
      <div>
        <DataTable pagination columns={columns} data={data} />
      </div>

      <Modal isOpen={showFormModal} size="lg">
        <ModalHeader toggle={() => setShowFormModal(!showFormModal)}>
          {values.id === "" ? "New" : "Update"} Crop
        </ModalHeader>
        <Form onSubmit={handleSubmit}>
          <ModalBody>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touched.name && errors.name}
              />
              <FormFeedback>{errors.name}</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category</Label>
              <Input
                type="select"
                name="category"
                value={values.category}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touched.category && errors.category}
              >
                <option value="">Select Category</option>
                <option value="Fruits">Fruits</option>
                <option value="Vegetables">Vegetables</option>
                <option value="Flowers">Flowers</option>
              </Input>
              <FormFeedback>{errors.category}</FormFeedback>
            </FormGroup>
            <FormGroup switch>
              <Label check>Is Active</Label>
              <Input
                type="switch"
                name="isActive"
                checked={values.isActive}
                onChange={handleChange}
              />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button type="submit" color="primary">
              {values.id === "" ? "Save" : "Update"}
            </Button>
            <Button color="secondary" onClick={() => setShowFormModal(false)}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>

      <Modal isOpen={showDeleteModal} centered>
        <ModalHeader toggle={() => setShowDeleteModal(!showDeleteModal)}>
          Delete Crop
        </ModalHeader>
        <ModalBody>Are you sure you want to delete this crop?</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={onDelete}>
            Delete
          </Button>
          <Button color="secondary" onClick={() => setShowDeleteModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default CropList;
