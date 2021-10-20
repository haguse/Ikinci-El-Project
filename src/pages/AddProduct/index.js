import React, { useState, useEffect } from "react";
import {
  Wrapper,
  Container,
  Detail,
  AddFile,
  Line,
  Button,
} from "./ScAddProduct";
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../actions/categoriesActions";
import { getAllBrands } from "../../actions/brandsActions";
import { getAllColors } from "../../actions/colorsActions";
import { getAllStatus } from "../../actions/statusActions";

import { addProduct } from "../../actions/productsActions";

import AddFileIcon from "../../images/Add Product/FileIcon.svg";
import Switch from "react-switch";

const AddProduct = () => {
  // console.log(categories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    dispatch(getAllColors());
    dispatch(getAllStatus());
  }, [dispatch]);

  const categories = useSelector((state) => state.categories);
  const brands = useSelector((state) => state.brands);
  const colors = useSelector((state) => state.colors);
  const status = useSelector((state) => state.status);

  const [newProductImage, setNewProductImage] = useState(null);

  const [newProduct, setNewProduct] = useState({
    price: 0,
    imageUrl: "",
    title: "",
    status: {
      title: "",
      id: "",
    },
    color: {
      title: "",
      id: "",
    },
    brand: {
      title: "",
      id: "",
    },
    category: {
      title: "",
      id: "",
    },
    description: "",
    isOfferable: false,
  });

  // New Brand Name, Description, Price Assignments
  const handleInput = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleCategory = (category) => {
    setNewProduct({
      ...newProduct,
      category: {
        title: category.title,
        id: category.id,
      },
    });
  };

  const handleBrand = (brand) => {
    setNewProduct({
      ...newProduct,
      brand: {
        title: brand.title,
        id: brand.id,
      },
    });
  };

  const handleColor = (color) => {
    setNewProduct({
      ...newProduct,
      color: {
        title: color.title,
        id: color.id,
      },
    });
  };

  const handleStatus = (status) => {
    setNewProduct({
      ...newProduct,
      status: {
        title: status.title,
        id: status.id,
      },
    });
  };

  const handleFile = (e) => {
    setNewProductImage(e.target.files[0]);
  };

  const handleIsOfferable = (nextState) => {
    // setNewProductIsOfferable(nextState);
    setNewProduct({
      ...newProduct,
      isOfferable: nextState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    dispatch(addProduct(newProduct));
  };

  return (
    <Container>
      <Wrapper>
        <Detail>
          <p>Ürün Detayları</p>
          <form>
            <label htmlFor="">Ürün Adı</label>
            <input
              className="product__name"
              type="text"
              placeholder="Örnek: iPhone 12 Pro Max"
              name="title"
              onChange={handleInput}
            />
            <label htmlFor="">Açıklama</label>
            <textarea
              className="product__desc"
              id=""
              cols="30"
              rows="4"
              placeholder="Ürün açıklamasını girin"
              name="description"
              onChange={handleInput}
            ></textarea>
            <div className="selects">
              <div className="select">
                <label htmlFor="">Kategori</label>
                <select className="" name="" id="">
                  {categories.categoriesData.map((category) => (
                    <option
                      onClick={() => handleCategory(category)}
                      key={category.id}
                      value={category.id}
                    >
                      {category.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select">
                <label htmlFor="">Marka</label>
                <select name="brand.title" id="">
                  {brands.brandsData.map((brand) => (
                    <option onClick={() => handleBrand(brand)} key={brand.id}>
                      {brand.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="selects">
              <div className="select">
                <label htmlFor="">Renk</label>
                <select name="" id="">
                  {colors.colorsData.map((color) => (
                    <option onClick={() => handleColor(color)} key={color.id}>
                      {color.title}
                    </option>
                  ))}
                </select>
              </div>
              <div className="select">
                <label htmlFor="">Kullanım Durumu</label>
                <select name="" id="">
                  {status.statusData.map((status) => (
                    <option
                      onClick={() => handleStatus(status)}
                      key={status.id}
                    >
                      {status.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <label htmlFor="">Fiyat</label>
            <input
              className="price"
              type="text"
              name="price"
              id=""
              placeholder="TL"
              onChange={handleInput}
            />
            <div className="toggle-switch">
              <span>Teklif opsiyonu</span>
              <Switch
                onChange={handleIsOfferable}
                checked={newProduct.isOfferable}
                onColor="#4B9CE2"
                uncheckedIcon={false}
                checkedIcon={false}
              />
            </div>
          </form>
        </Detail>
        <Line />
        <AddFile>
          <div className="add-file">
            <p className="title">Ürün Görseli</p>
            <div className="add-file__wrapper">
              <img src={AddFileIcon} alt="Add File" />
              <div className="add-file__wrapper__text">
                <p>Sürükleyip bırakarak yükle</p>
                <p>veya</p>
              </div>
              {/* <button>Görsel Seçin</button> */}
              <input type="file" name="" id="" onChange={handleFile} />
              <p className="add-file__wrapper__size">
                PNG ve JPEG Dosya boyutu max. 100kb
              </p>
            </div>
          </div>
          <Button onClick={handleSubmit} type="submit">
            Kaydet
          </Button>
        </AddFile>
      </Wrapper>
    </Container>
  );
};

export default AddProduct;
