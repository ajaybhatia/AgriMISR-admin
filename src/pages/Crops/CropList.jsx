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
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/640px-Red_Apple.jpg",
      isActive: true,
    },
    {
      id: 2,
      name: "Banana",
      category: "Fruits",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Banana_d%C3%A1gua.jpg/640px-Banana_d%C3%A1gua.jpg",
      isActive: true,
    },
    {
      id: 3,
      name: "Orange",
      category: "Fruits",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Orange%2C_orange_peel.jpg/640px-Orange%2C_orange_peel.jpg",
      isActive: true,
    },
    {
      id: 4,
      name: "Lemon",
      category: "Fruits",
      image: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Lemon.jpg",
      isActive: false,
    },
    {
      id: 5,
      name: "Grapes",
      category: "Fruits",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Grapes_Dodoma_Tanzania.jpg/640px-Grapes_Dodoma_Tanzania.jpg",
      isActive: true,
    },
    {
      id: 6,
      name: "Pineapple",
      category: "Fruits",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Ananas_comosus_Blanco2.458.jpg/640px-Ananas_comosus_Blanco2.458.jpg",
      isActive: true,
    },
    {
      id: 7,
      name: "Potato",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Potato_and_cross_section.jpg/640px-Potato_and_cross_section.jpg",
      isActive: false,
    },
    {
      id: 8,
      name: "Tomato",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Bright_red_tomato_and_cross_section02.jpg/640px-Bright_red_tomato_and_cross_section02.jpg",
      isActive: true,
    },
    {
      id: 9,
      name: "Onion",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Onion_on_White.JPG/640px-Onion_on_White.JPG",
      isActive: true,
    },
    {
      id: 10,
      name: "Garlic",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Garlic.jpg/640px-Garlic.jpg",
      isActive: true,
    },
    {
      id: 11,
      name: "Carrot",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Starr-070730-7895-Daucus_carota_subsp_sativus-in_store-Foodland_Pukalani-Maui_%2824772637502%29.jpg/640px-Starr-070730-7895-Daucus_carota_subsp_sativus-in_store-Foodland_Pukalani-Maui_%2824772637502%29.jpg",
      isActive: true,
    },
    {
      id: 12,
      name: "Cucumber",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Cogombre_llarg_holand%C3%A8s_%28fruit%29.png/640px-Cogombre_llarg_holand%C3%A8s_%28fruit%29.png",
      isActive: true,
    },
    {
      id: 13,
      name: "Cabbage",
      category: "Vegetables",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Brassica_oleracea_var._capitata_%284170722993%29.jpg/640px-Brassica_oleracea_var._capitata_%284170722993%29.jpg",
      isActive: true,
    },
    {
      id: 14,
      name: "Rose",
      category: "Flowers",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Rose-Rosa_03.jpg/640px-Rose-Rosa_03.jpg",
      isActive: true,
    },
    {
      id: 15,
      name: "Lily",
      category: "Flowers",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Lilium_%27Stargazer%27_%28the_%27Stargazer_lily%27%29.jpg/640px-Lilium_%27Stargazer%27_%28the_%27Stargazer_lily%27%29.jpg",
      isActive: true,
    },
  ]);

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    setValues,
    setFieldValue,
    errors,
    touched,
    resetForm,
  } = useFormik({
    initialValues: {
      id: "",
      name: "",
      description: "",
      category: "",
      image: "",
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
        name: "Image",
        selector: (row) => row.image,
        cell: (row) => (
          <img src={row.image} alt={row.name} width="50" height="50" />
        ),
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
              <Label for="description">Description</Label>
              <Input
                type="textarea"
                name="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
                invalid={touched.description && errors.description}
              />
              <FormFeedback>{errors.description}</FormFeedback>
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
            <FormGroup>
              <Label for="description">Image</Label>
              <Input
                type="file"
                name="image"
                onChange={(e) => setFieldValue("image", e.target.files[0])}
                onBlur={handleBlur}
                invalid={touched.image && errors.image}
              />
              <FormFeedback>{errors.image}</FormFeedback>
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
