/* eslint-disable react/prop-types */
import {
  Card,
  CardBody,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
  Typography,
} from '@material-tailwind/react';
import { useEffect, useState } from 'react';

function Content({ onSubmitData, isTrue }) {
  const data = onSubmitData;
  const [listMajor, setListMajor] = useState([data]);

  useEffect(() => {
    setListMajor(data);
  }, [data]);

  if (isTrue === false) {
    return <></>;
  } else {
    return (
      <>
        <Card className="mx-[2rem] lg:mx-[6rem] bg-[#1e293b] border border-gray-700 rounded-lg p-8 md:p-12">
          <CardBody>
            <Tabs value={data[0].name}>
              <TabsHeader>
                {data.map(({ label, name }) => {
                  return (
                    <Tab key={label} value={name}>
                      {name}
                    </Tab>
                  );
                })}
              </TabsHeader>
              <TabsBody>
                {listMajor.map(({ name, description, extra_note }) => {
                  return (
                    <TabPanel key={name} value={name}>
                      <div>
                        <h1>Description</h1>
                        <Typography>{description}</Typography>
                      </div>
                      <div>
                        <h1>Extra Note</h1>
                        <Typography>{extra_note}</Typography>
                      </div>
                    </TabPanel>
                  );
                })}
              </TabsBody>
            </Tabs>
          </CardBody>
        </Card>
      </>
    );
  }
}

export default Content;
