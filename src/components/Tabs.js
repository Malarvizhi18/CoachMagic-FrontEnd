import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Profile from "../img/Avatar Image.svg"
import { InputText } from "primereact/inputtext";
import { Divider } from "@mui/material";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [image, setImage] = React.useState(Profile);
  console.log(image);

  return (
    <Box sx={{ width: "100%", typography: "body1", fontFamily: "poppins" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Profile" value="1" />
            <Tab label="Education & Skills" value="2" />
            <Tab label="Schedule" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
          <div>
            <h1 className="text-[#4C535F]">Your Profile Picture</h1>
            <img
             alt="img"
              className=" m-2 h-[100px] w-[100px] rounded-full object-cover"
              src={image}
            />
            <InputText
              type="file"
              onChange={(event) => {
                setImage(URL.createObjectURL(event.target.files[0]));
              }}
            />
            <Divider sx={{ marginTop: "25px" }} />
            <div className="flex">
              <div className="p-2">
                <h1 className="font-[16px] pb-2 pt-2">Full name</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the full name"
                />
                <h1 className="font-[16px] pb-2 pt-2">Domain</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the Domain"
                />
                <h1 className="font-[16px] pb-2 pt-2">Bio</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Craft your bio"
                />
                <h1 className="font-[16px] pb-2 pt-2">Tag</h1>
                {/* <input className='bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]' placeholder='Craft your bio'/> */}
                <select
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Select your prefered tag"
                  id="cars"
                  name="cars"
                >
                  <option className="text-[#FAFBFC]" value="">
                    Select your option
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>

              <div className="p-2">
              <h1 className="font-[16px] pb-2 pt-2">Email</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter the Email"
                />
              <h1 className="font-[16px] pb-2 pt-2">Phone</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Please enter your phone number"
                />
              <h1 className="font-[16px] pb-2 pt-2">Know about me</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Link to Social Account"
                />
              <h1 className="font-[16px] pb-2 pt-2">Slogan</h1>
              <select
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Select your prefered tag"
                  id="cars"
                  name="cars"
                >
                  <option className="text-[#FAFBFC]" value="">
                    Select your option
                  </option>
                  <option value="volvo">Volvo</option>
                  <option value="saab">Saab</option>
                  <option value="fiat">Fiat</option>
                  <option value="audi">Audi</option>
                </select>
              </div>
              
            </div>

            <div className="flex p-2 pt-4">
              <button className="text-white bg-black p-3 text-[14px] rounded-md">
                Update Profile
              </button>
              <button className="text-[14px] p-3 pl-8"> Reset</button>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="2">
          <div>
            
            <div className="flex">
              <div className="p-2">
                <h1 className="font-[16px] pb-2 pt-2">Skills</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="Enter your skills"
                />
                <h1 className="font-[16px] pb-2 pt-20">Preceding</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="School/College/CompanyName"
                />
          
              </div>

              <div className="p-2">
              <h1 className="font-[16px] pb-2 pt-2">Years of Experience</h1>
              <select
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px] cursor-pointer"
                  placeholder="Select Years"
                  id="Experience"
                  name="Experience"
                >
                  <option className="text-[#FAFBFC]" value="">
                    Select your option
                  </option>
                  <option value="volvo">0 - 1 years</option>
                  <option value="saab">2 - 5 years</option>
                  <option value="fiat">more than 5 years</option>
                  <option value="audi">more than 10 years</option>
                </select>
              <h1 className="font-[16px] pb-2 pt-20">Existing</h1>
                <input
                  className="bg-[#FAFBFC] border border-gray-400 rounded-lg p-2 w-[400px]"
                  placeholder="School/College/CompanyName"
                />
             
             
              </div>
              
            </div>

            <div className="flex p-2 pt-20">
              <button className="text-white bg-black p-3 px-5 text-[14px]  rounded-md hover:bg-gray-500">
                Save changes
              </button>
             
            </div>
          </div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
