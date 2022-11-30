import * as Yup from "yup";

import {
  Badge,
  Button,
  Col,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  InputGroup,
  InputGroupText,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import {
  FaPencilAlt,
  FaPlus,
  FaSearch,
  FaTimes,
  FaTrashAlt,
} from "react-icons/fa";
import {
  PAGINATION_ROWS_PER_PAGE_OPTIONS,
  SKIP,
  TAKE,
} from "../../constants/datatable";
import React, { useMemo, useState } from "react";
import {
  useCreateUpdateCropCategory,
  useCropCategories,
  useDeleteCropCategory,
} from "../../api/crops-api-hooks";

import DataTable from "react-data-table-component";
import dayjs from "dayjs";
import { useFormik } from "formik";

const CropCategories = () => {
  const [showFormModal, setShowFormModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [q, setQ] = useState("");
  const [skip, setSkip] = useState(SKIP);
  const [take, setTake] = useState(TAKE);

  const { data, refetch } = useCropCategories(
    { q, skip, take, onlyActive: false },
    {
      onError: (error) => console.log(error),
    }
  );

  const { mutate } = useCreateUpdateCropCategory({
    onSuccess: refetch,
  });

  const { mutate: deleteCropCategory } = useDeleteCropCategory({
    onSuccess: refetch,
  });

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
      description: "",
      isActive: true,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .trim()
        .min(5, "Name should have minimum 5 characters")
        .required("Name is required"),
    }),
    onSubmit: (values) => {
      const request = values;
      if (values.id === "") {
        delete request.id;
        mutate(request);
      } else {
        mutate(request);
      }
      resetForm();
      setShowFormModal(false);
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
        sortable: true,
      },
      {
        name: "Created At",
        selector: (row) => row.createdAt,
        format: (row) => dayjs(row.createdAt).format("Do MMM, YYYY"),
        sortable: true,
      },
      {
        name: "Updated At",
        selector: (row) => row.updatedAt,
        format: (row) => dayjs(row.updatedAt).format("Do MMM, YYYY"),
        sortable: true,
      },
      {
        name: "Is Active",
        selector: (row) => row.isActive,
        sortable: true,
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
    deleteCropCategory(values.id);
    setShowDeleteModal(false);
  };

  return (
    <div>
      <h3>Crop Categories</h3>
      <Row>
        <Col xs={6} md={6} lg={4} xl={4} xxl={4}>
          <InputGroup>
            <InputGroupText>
              <FaSearch />
            </InputGroupText>
            <Input
              placeholder="Search by Name"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
            <FaTimes className="input-icon-right" onClick={() => setQ("")} />
          </InputGroup>
        </Col>
        <Col>
          <Button
            className="float-end"
            color="success"
            onClick={() => {
              resetForm();
              setShowFormModal(true);
            }}
          >
            <FaPlus className="me-2" />
            New Category
          </Button>
        </Col>
      </Row>
      <div>
        <DataTable
          pagination
          paginationServer
          columns={columns}
          data={data?.cropCategoryResponses}
          paginationTotalRows={data?.totalCount}
          paginationPerPage={take}
          paginationRowsPerPageOptions={PAGINATION_ROWS_PER_PAGE_OPTIONS}
          onChangePage={(page) => setSkip((page - 1) * take)}
          onChangeRowsPerPage={(perPage) => setTake(perPage)}
        />
      </div>

      <Modal isOpen={showFormModal} size="lg">
        <ModalHeader toggle={() => setShowFormModal(!showFormModal)}>
          {values.id === "" ? "New" : "Update"} Crop Category
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
          Delete Crop Category
        </ModalHeader>
        <ModalBody>Are you sure you want to delete this category?</ModalBody>
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

export default CropCategories;
