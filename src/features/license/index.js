import React from "react";
import {
  FormLicense,
  ModalLicense,
  ContentLicense,
  CardLicense,
  ImgCardLicense,
  ColLicense,
  RowLicense,
  UploadLicense,
  ImgModalLicense,
  IconLicense
} from "./styles";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Actions } from "./actions";


function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

class LicenseForm extends React.Component {
  state = {
    previewVisible: false,
    previewImage: "",
    fileList: [
    ]
  };

  handleCancel = () => this.setState({ previewVisible: false });

  handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    this.setState({
      previewImage: file.url || file.preview,
      previewVisible: true
    });
  };

  handleChange = ({ fileList }) => this.setState({ fileList });

  render() {
    const { actions } = this.props;
    const { previewVisible, previewImage, fileList } = this.state;
    const uploadButton = (
      <div>
        <IconLicense type="plus" />
        <div className="ant-upload-text">Upload</div>
      </div>
    );
    return (
      <ContentLicense>
        <CardLicense title="TU LICENCIA">
          <FormLicense>
            <RowLicense>
              <ColLicense span={12}>
                <UploadLicense
                  action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={this.handlePreview}
                  onChange={this.handleChange}
                >
                  {fileList.length >= 8 ? null : uploadButton}
                </UploadLicense>
                <ModalLicense
                  visible={previewVisible}
                  footer={null}
                  onCancel={this.handleCancel}
                >
                  <ImgModalLicense src={previewImage} />
                </ModalLicense>
              </ColLicense>
              <ColLicense span={12}>
              </ColLicense>
            </RowLicense>
          </FormLicense>
        </CardLicense>
      </ContentLicense>
    );
  }
}

function mapStateToProps(state) {
  return {
    state: state.licenseReducer,
    stateLogin: state.loginReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...Actions }, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LicenseForm);
