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
import { history } from "../../_helpers/history";
import { ACCESS_TOKEN_NAME } from "../../api";

// import AddFileIcon from "../../images/Add Product/FileIcon.svg";
import Switch from "react-switch";

import ProgressBar from "../../components/AddProduct/ProgressBar";

import DragImage from "../../components/AddProduct/DragImage";

const AddProduct = () => {
  const token = localStorage.getItem(ACCESS_TOKEN_NAME);
  if (!token) history.push("sign-in");

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
  const imageUrl = useSelector((state) => state.file.imageUrl);

  const [showProgress, setShowProgress] = useState(false);

  // Upload Image
  // useEffect(() => {
  //   const fd = new FormData();
  //   if (newProductImage !== null) {
  //     fd.append("file", newProductImage);
  //     dispatch(uploadFile(fd));
  //     setShowProgress(true);
  //     console.log(fd);
  //   }
  // }, [newProductImage, dispatch]);

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

  const handleIsOfferable = (nextState) => {
    setNewProduct({
      ...newProduct,
      isOfferable: nextState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newProduct);
    if (newProduct.imageUrl !== "") {
      dispatch(addProduct(newProduct));
    }
  };

  // Set Product Image Url
  useEffect(() => {
    setNewProduct({ ...newProduct, imageUrl: imageUrl.url });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imageUrl]);

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
            {showProgress ? (
              <ProgressBar />
            ) : (
              <div className="add-file__wrapper">
                <DragImage showProgress={() => setShowProgress(true)}>
                  {/* <img src={AddFileIcon} alt="Add File" />
                  <div className="add-file__wrapper__text">
                    <p>Sürükleyip bırakarak yükle</p>
                    <p>veya</p>
                  </div>
                  <label htmlFor="file-upload">
                    <span>Görsel Seçin</span>
                  </label> */}
                </DragImage>
                <input
                  type="file"
                  id="file-upload"
                  // onChange={(e) => setNewProductImage(e.target.files[0])}
                />
                <p className="add-file__wrapper__size">
                  PNG ve JPEG Dosya boyutu max. 100kb
                </p>
              </div>
            )}
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
