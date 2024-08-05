import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Form, Input, Popconfirm, message } from "antd";
import axios from "axios";

const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const handleDelete = (id: string) => {
    axios
      .delete(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        message.success("Product deleted successfully");
        setProducts(products.filter((product) => product.id !== id));
      })
      .catch((error) => {
        console.error("Error:", error);
        message.error("Failed to delete product");
      });
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    axios
      .patch(`https://fakestoreapi.com/products/${editingProduct.id}`, {
        ...editingProduct,
      })
      .then((response) => {
        message.success("Product updated successfully");
        setProducts(
          products.map((product) =>
            product.id === editingProduct.id ? editingProduct : product
          )
        );
        setIsModalVisible(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        message.error("Failed to update product");
      });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (text, record) => (
        <img src={record.image} alt={record.title} style={{ width: 50 }} />
      ),
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
      render: (text, record) =>
        `${record.rating.rate} (${record.rating.count})`,
      sorter: (a, b) => a.rating.rate - b.rating.rate,
    },
    {
      title: "Actions",
      key: "actions",
      render: (text, record) => (
        <div style={{ display: "flex", gap: "5px" }}>
          <Button type="primary" onClick={() => handleEdit(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this product?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="primary" danger>
              Delete
            </Button>
          </Popconfirm>
        </div>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={products} columns={columns} rowKey="id" />
      <Modal
        title="Edit Product"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form
          layout="vertical"
          initialValues={editingProduct}
          onValuesChange={(allValues) => {
            setEditingProduct((prev) => ({ ...prev, ...allValues }));
          }}
        >
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>
          <Form.Item label="Price" name="price">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input />
          </Form.Item>
          <Form.Item label="Category" name="category">
            <Input />
          </Form.Item>
          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>
          <Form.Item label="Rating" name="rating">
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminProduct;