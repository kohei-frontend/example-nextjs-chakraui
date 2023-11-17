import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Heading,
  Card,
  CardBody,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button, 
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tooltip 
} from '@chakra-ui/react'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Card className="mt-4">
        <CardBody>
          <Heading>Heading</Heading>
        </CardBody>
      </Card>
      
      <Card className="mt-4">
        <CardBody>
          <h2>Accordion</h2>
            <Accordion>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      title1
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  content1
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                      title2
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  content2
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
      </Card>
      
      <Card className="mt-4">
        <CardBody>
          <h2>Tabs</h2>
          <Tabs>
            <TabList>
              <Tab>tab1</Tab>
              <Tab>tab2</Tab>
              <Tab>tab3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>content1</p>
              </TabPanel>
              <TabPanel>
                <p>content2</p>
              </TabPanel>
              <TabPanel>
                <p>content3</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>

      <Card className="mt-4">
        <CardBody>
          <h2>Menu</h2>
          <Menu>
            <MenuButton as={Button}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>menu1</MenuItem>
              <MenuItem>menu2</MenuItem>
              <MenuItem>menu3</MenuItem>
              <MenuItem>menu4</MenuItem>
              <MenuItem>menu5</MenuItem>
            </MenuList>
          </Menu>
        </CardBody>
      </Card>

      <Card className="mt-4">
        <CardBody>
          <h2>Popover</h2>
          <Popover>
            <PopoverTrigger>
              <Button>Trigger</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Confirmation!</PopoverHeader>
              <PopoverBody>Popover Body</PopoverBody>
            </PopoverContent>
          </Popover>
        </CardBody>
      </Card>

      <Card className="mt-4">
        <CardBody>
          <h2>Tooltip</h2>
          <Tooltip label="Thanx for hovering me!" aria-label='A tooltip'>
            Hover me
          </Tooltip>
        </CardBody>
      </Card>
    </main>
  )
}
