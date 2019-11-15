import React, { Component } from "react";
import { SHA256 } from "crypto-js";
import { postStoreAction } from "../../Actions/postStore";
import { getStoreAction } from "../../Actions/getStore";
import { connect } from "react-redux";
import "./Tabs.css";

class CreateTab extends Component {
  state = {
    hash: "",
    password: "",
    meta: "",
    fileName: "",
    file: [],
    checkboxStatus: false,
    loading: false,
    recordStatus: true,
    contentStatus: true
  };
  processFile = files => {
    const file = files[0];
    const reader = new FileReader();
    reader.onload = event => {
      const data = event.target.result;
      this.setState({ recordStatus: false });
      this.setState({ hash: SHA256(data) + "" });
      console.log(this.state.hash);
    };
    reader.readAsBinaryString(file);
  };
  handleChange(e) {
    this.setState({ checkboxStatus: e.target.checked }, () => {
      console.log(this.state.checkboxStatus);
    });
  }
  handleFileName = files => {
    const file = files[0];
    this.setState({ fileName: file.name });
  };
  render() {
    return (
      <React.Fragment>
        <div class="container">

          <h3
            style={{
              color: "#050607",
              fontWeight: "600",
            }}
          >
            Record your document hash on the blockchain
          </h3>
          <span
            style={{
              // fontFamily: "Proxima Nova",
              fontWeight: "500",
              color: "#000000"
            }}
          >
            The hash is a sha256 hash of the content of your document.
            <br />
            The filename is not part of the calculation.
            <br />
          </span>
          {this.props.SuccessMsg === "SUCCESS" ? (
            <div>
              <h3
                style={{
                  color: "#050607",
                  // fontFamily: "Proxima Nova",
                  fontWeight: "500"
                }}
              >
                Your hash has been successfully added to the ledger.
              </h3>
              <span>
                {this.state.hash}
              </span>
            </div>
          ) : (
            <div>
              <div class="row">
                <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
                <div
                  class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6"
                  style={{ marginTop: "20px" }}
                >
                  <input
                    type="file"
                    id="fileInput"
                    onChange={e => {
                      this.processFile(e.target.files);
                      this.handleFileName(e.target.files);
                      this.setState({ file: e.target.files });
                    }}
                    accept=".pdf"
                    name="selectedFile"
                    style={{ display: "none" }}
                    class="inputfile inputfile-6"
                    data-multiple-caption="{count} files selected"
                    multiple
                  />
                  <label class="w-100 h-100 file" for="fileInput">
                    Choose a file
                  </label>
                </div>
                <div
                  class="col-xl-3 col-lg-3 col-md-4 col-sm-4 col-xs-6"
                  style={{ marginTop: "20px" }}
                >
                  <span
                    style={{
                      fontFamily: "Proxima Nova",
                      fontWeight: "400",
                      color: "#000000"
                    }}
                  >
                    {this.state.fileName ? this.state.fileName : "Report.pdf"}
                  </span>
                </div>
                <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
              </div>
              <div class="row">
                <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
                <div
                  class="col-xl-3 col-lg-3 col-md-8 col-sm-6 col-xs-12"
                  style={{ marginTop: "20px" }}
                >
                  <div class="custom-control custom-checkbox mb-3">
                    <input
                      type="checkbox"
                      class="custom-control-input form-control-lg"
                      id="customCheck"
                      onChange={e => this.handleChange(e)}
                      name="example1"
                      style={{ padding: "100px" }}
                    />
                    <label
                      class="custom-control-label"
                      for="customCheck"
                      style={{
                        fontFamily: "Proxima Nova",
                        fontWeight: "400",
                        color: "#000000",
                        marginLeft: "10px"
                      }}
                    >
                      Save the file online
                    </label>
                  </div>
                </div>
                <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
                <div class="d-none d-xl-block d-lg-block d-md-block d-sm-block col-xl-3 col-lg-3 col-md-2 col-sm-2" />
              </div>
              {this.state.checkboxStatus === true ? (
                <div>
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
                    <div
                      class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8"
                      style={{ padding: "0% 6% 0% 6%" }}
                    >
                      <input
                        type="password"
                        placeholder="Password (Optional)"
                        onChange={e =>
                          this.setState({ password: e.target.value })
                        }
                        class="form-control mb-3 mt-2"
                        style={{
                          paddingLeft: "25px",
                          fontFamily: "Proxima Nova",
                          color: "#BDBEBE",
                          borderRadius: "10px"
                        }}
                      />
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
                  </div>
                  <div class="row">
                    <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-3" />
                    <div class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-6">
                      <span
                        class="mt-1 mb-2"
                        style={{
                          fontFamily: "Proxima Nova",
                          fontWeight: "400",
                          fontSize: "12px",
                          color: "#000000",
                          marginLeft: "10px"
                        }}
                      >
                        You can in addition add a password. <br />
                        In that case, you will need both the hash and the
                        password to download the file
                      </span>
                    </div>
                    <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-3" />
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          )}
          <div class="row" style={{ textAlign: "center", marginTop: "20px" }}>
            <div class="col-12">
              {this.props.ErrorMsg === "DUPLICATE_ENTRY" ? (
                <kbd style={{ fontFamily: "Proxima Nova", fontSize: "16px" }}>
                  This document has already been registered.&nbsp;&nbsp;
                  <span
                    style={{
                      color: "#FF0000"
                    }}
                  >
                    Warning!!!
                  </span>
                </kbd>
              ) : (
                ""
              )}
            </div>
          </div>
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
            <div
              class="col-xl-6 col-lg-6 col-md-8 col-sm-8 col-xs-8"
              style={{ padding: "0% 6% 0% 6%" }}
            >
              {this.props.SuccessMsg === "SUCCESS" ? (
                <button
                  onClick={() => {
                    window.location.reload();
                  }}
                  class="mt-4 mb-5 btn btn-create"
                >
                  Record Another
                </button>
              ) : this.state.recordStatus === true ? (
                <button disabled class="mt-4 mb-5 btn btn-create-disabled">
                  Record
                </button>
              ) : (
                <button
                  class="mt-4 mb-5 btn btn-create"
                  disabled={this.state.loading}
                  onClick={() => {
                    if (!this.state.loading) {
                      this.setState(
                        {
                          loading: true
                        },
                        () => {
                          this.timer = setTimeout(() => {}, this.state.loading);
                          this.state.password
                            ? this.props.postStoreAction(
                                this.state.file,
                                this.state.hash,
                                this.state.password,
                                this.state.meta,
                                this
                              )
                            : this.props.getStoreAction(this.state.hash, this);
                        }
                      );
                    }
                  }}
                >
                  {this.state.loading && (
                    <i class="spinner-border" role="status" />
                  )}
                  {!this.state.loading && <span>Record</span>}
                </button>
              )}
            </div>
            <div class="col-xl-3 col-lg-3 col-md-2 col-sm-2 col-xs-2" />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  SuccessMsg: state.ProveitReducer.successMsg,
  // SuccessMsg: state.ProveitReducer.getStoreSuccessMsg,
  ErrorMsg: state.ProveitErrorReducer.StoreErrorMsg
  // ErrorMsg: state.ProveitErrorReducer.getStoreErrorMsg
});

export default connect(mapStateToProps, { postStoreAction, getStoreAction })(
  CreateTab
);
