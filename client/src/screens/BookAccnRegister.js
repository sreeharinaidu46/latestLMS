import React, { useState, useEffect } from "react";
import {
  Grid,
  Icon,
  Input,
  Button,
  Sticky,
} from "semantic-ui-react";
import {
  getOneBook,
  addOneBook,
  modifyAllBooks,
  modifyOneBokk,
} from "../actions/book_action";
import { useDispatch, useSelector } from "react-redux";

const AddBook = () => {
  const dispatch = useDispatch();
  const [access_no, setAcess] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [class_No, setClassNo] = useState("");
  const [call_no, setCallNo] = useState("");
  const [publisher, setPublisher] = useState("");
  const [vendor, setVendor] = useState("");
  const [source, setSource] = useState("");
  const [price, setPrice] = useState("");
  const [department, setDepartment] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [language, setLanguage] = useState("");
  const [bill_no, setBillNo] = useState("");
  const [category, setCatogory] = useState("");
  const [pages, setPages] = useState("");
  const [copies, setCopies] = useState(null);
  const [avail_copies, setAailCopies] = useState(null);
  

  const { bookItem } = useSelector((state) => state.getOneBookReducer);

  const readBookDetails = (data) => {
    if (data === "") {
      dispatch(getOneBook(""));
      setAcess("");
      setTitle("");
      setAuthor("");
      setBillNo("");
      setCatogory("");
      setClassNo("");
      setDepartment("");
      setLanguage("");
      setYear("");
      setPages("");
      setPrice("");
      setSubject("");
      setVendor("");
      setSource("");
      setPublisher("");
      setCallNo("");
      setCopies(0);
      setAailCopies("");
      return;
    }

    dispatch(getOneBook(data));

    if (Object.keys(bookItem).length > 0) {
      setTitle(bookItem.title);
      setAuthor(bookItem.author);
      setBillNo(bookItem.bill_no);
      setCatogory(bookItem.category);
      setClassNo(bookItem.class_no);
      setDepartment(bookItem.department);
      setLanguage(bookItem.language);
      setYear(bookItem.year);
      setPages(bookItem.pages);
      setPrice(bookItem.price);
      setSubject(bookItem.subject);
      setVendor(bookItem.vendor);
      setSource(bookItem.source);
      setPublisher(bookItem.publisher);
      setCallNo(bookItem.call_no);
      setCopies(bookItem.copies);
      setAailCopies(bookItem.avial_copies);
      dispatch(getOneBook(access_no));
    } else {
      setTitle("");
      setAuthor("");
      setBillNo("");
      setCatogory("");
      setClassNo("");
      setDepartment("");
      setLanguage("");
      setYear("");
      setPages("");
      setPrice("");
      setSubject("");
      setVendor("");
      setSource("");
      setPublisher("");
      setCallNo("");
      setCopies(0);
    }
  };

  const addBookHandler = () => {
    const newBook = {
      title: title,
      author: author,
      publisher: publisher,
      call_no: call_no,
      copies: parseInt(copies),
      year: year,
      subject: subject,
      pages: pages,
      language: language,
      vendor: vendor,
      source: source,
      department: department,
      bill_no: bill_no,
      category: category,
      price: price,
    };

    dispatch(addOneBook(newBook));
    readBookDetails("");
    setAcess("");
  };

  const modifyOneBookHandler = () => {
    const newBook = {
      accession_no: bookItem.accession_no,
      title: title,
      author: author,
      publisher: publisher,
      call_no: call_no,
      copies: parseInt(copies),
      year: year,
      subject: subject,
      pages: pages,
      language: language,
      vendor: vendor,
      source: source,
      department: department,
      bill_no: bill_no,
      category: category,
      price: price,
    };
    dispatch(modifyOneBokk(newBook));
    readBookDetails("");
    setAcess("");
  };

  const modifyToAllCopies = () => {
    const newBook = {
      title: title,
      author: author,
      publisher: publisher,
      call_no: call_no,
      copies: parseInt(copies),
      year: year,
      subject: subject,
      pages: pages,
      language: language,
      vendor: vendor,
      source: source,
      department: department,
      bill_no: bill_no,
      category: category,
      price: price,
    };
    dispatch(modifyAllBooks(newBook));
    readBookDetails("");
    setAcess("");
  };

  return (
    <div className="col-md-11 m-auto">
      <p style={{ textAlign: "center", fontWeight: "bold" }}>
        No of copies-{Object.keys(bookItem).length > 0 && bookItem.avial_copies}
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Available-
        {Object.keys(bookItem).length > 0 && bookItem.copies}
      </p>
      <Grid>
        <Grid.Column width="8">
          <div className="col-md-7 m-auto" style={{ display: "flex" }}>
            <button
              style={{ width: "150px", backgroundColor: "#e0dddc" }}
              type="button"
              className="btn"
            >
              Accn No
            </button>
            <input
              type="text"
              className="form-control"
              placeholder="Accession No...."
              style={{ height: "50px" }}
              value={access_no}
              onChange={(e) => setAcess(e.target.value)}
            />
            <button
              onClick={() => readBookDetails(access_no)}
              className="btn btn-primary"
            >
              Search{" "}
            </button>
          </div>
        </Grid.Column>
      </Grid>
      <div
        className="col-md-10 m-auto"
        style={{
          fontSize: "1.3rem",
          padding: "15px",
          textDecoration: "underline",
          textDecorationColor: "#267ba6",
          color: "#267ba6",
        }}
      >
        Catalogue Details
      </div>
      <Grid style={{ marginLeft: "100px" }}>
        <Grid.Row>
          <Grid.Column width={8}>
            <Input
              fluid
              label="Title*"
              placeholder="Please enter title..."
              style={{ marginBottom: "10px" }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />

            <Input
              fluid
              label="Author(s)*"
              placeholder="Please Enter Author.."
              style={{ marginBottom: "10px" }}
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />

            <Grid columns="equal">
              <Grid.Column>
                <Input
                  fluid
                  label="Copies*"
                  type="number"
                  style={{ marginBottom: "10px" }}
                  value={copies}
                  onChange={(e) => setCopies(parseInt(e.target.value))}
                  disabled={Object.keys(bookItem).length > 0}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  fluid
                  label="Call No"
                  type="number"
                  style={{ marginBottom: "10px" }}
                  value={call_no}
                  onChange={(e) => setCallNo(e.target.value)}
                  disabled={Object.keys(bookItem).length > 0}
                />
              </Grid.Column>
            </Grid>
            <Input
              fluid
              label="Publisher"
              style={{ marginBottom: "10px" }}
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              fluid
              label="Subject"
              style={{ marginBottom: "10px" }}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
            <Input
              fluid
              label="Year"
              type="number"
              placeholder="ex:2020"
              style={{ marginBottom: "10px" }}
              value={year}
              onChange={(e) => setYear(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />
            <Input
              fluid
              label="Language"
              style={{ marginBottom: "10px" }}
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />
          </Grid.Column>
        </Grid.Row>

        <div
          style={{
            fontSize: "1.3rem",
            textDecoration: "underline",
            textDecorationColor: "#267ba6",
            color: "#267ba6",
          }}
        >
          Copy Details
        </div>

        <Grid.Row>
          <Grid.Column width={8}>
            <Input
              fluid
              label="Vendor"
              style={{ marginBottom: "10px" }}
              value={vendor}
              onChange={(e) => setVendor(e.target.value)}
            />
            <Input
              fluid
              label="Source"
              style={{ marginBottom: "10px" }}
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />

            <Input
              fluid
              label="Department*"
              style={{ marginBottom: "10px" }}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />
          </Grid.Column>
          <Grid.Column width={8}>
            <Input
              fluid
              label="Bill_No"
              style={{ marginBottom: "10px" }}
              value={bill_no}
              onChange={(e) => setBillNo(e.target.value)}
              disabled={Object.keys(bookItem).length > 0}
            />
            <Input
              fluid
              label="Category"
              style={{ marginBottom: "10px" }}
              value={category}
              onChange={(e) => setCatogory(e.target.value)}
            />
            <Grid columns="equal">
              <Grid.Column>
                <Input
                  fluid
                  label="Pages"
                  placeholder="ex:100.."
                  style={{ marginBottom: "10px" }}
                  value={pages}
                  onChange={(e) => setPages(e.target.value)}
                  disabled={Object.keys(bookItem).length > 0}
                />
              </Grid.Column>
              <Grid.Column>
                <Input
                  type="number"
                  fluid
                  label="Price"
                  style={{ marginBottom: "10px" }}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  disabled={Object.keys(bookItem).length > 0}
                />
              </Grid.Column>
            </Grid>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      <div className="col-md-10 m-auto">
        <Sticky>
          <Button
            style={{ backgroundColor: "#2e9957" }}
            icon
            labelPosition="left"
            disabled={Object.keys(bookItem).length > 0}
            onClick={addBookHandler}
          >
            <Icon name="add" />
            Add
          </Button>
          <Button
            icon
            style={{ backgroundColor: "#21acc4" }}
            labelPosition="left"
            disabled={!Object.keys(bookItem).length > 0}
            onClick={modifyOneBookHandler}
          >
            Modify
            <Icon name="edit" />
          </Button>
          <Button
            style={{ backgroundColor: "#e84905" }}
            icon
            labelPosition="left"
            disabled={!Object.keys(bookItem).length > 0}
            onClick={modifyToAllCopies}
          >
            <Icon name="edit" />
            Modify to all copies
          </Button>
          <Button
            style={{ backgroundColor: "#cfd647" }}
            icon
            labelPosition="left"
            onClick={() => readBookDetails("")}
          >
            clear
            <Icon name="redo" />
          </Button>
        </Sticky>
      </div>

      <div style={{ marginBottom: "400px" }}></div>
    </div>
  );
};

export default AddBook;
