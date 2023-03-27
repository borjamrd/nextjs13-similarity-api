"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/ui/Tabs";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";

import Code from "@/components/Code";
import { nodejs, python } from "@/helpers/documentation-code";

const DocumentationTabs = ({}) => {
  return (
    <Tabs defaultValue="nodejs" className="max-w-2xl w-full">
      <TabsList>
        <TabsTrigger value="nodejs">Nodejs</TabsTrigger>
        <TabsTrigger value="python">Python</TabsTrigger>
      </TabsList>
      <TabsContent value="nodejs">
        <SimpleBar>
          <Code show code={nodejs} language="javascript" animated />
        </SimpleBar>
      </TabsContent>
      <TabsContent value="python">
        <SimpleBar>
          <Code show code={python} language="python" animated />
        </SimpleBar>
      </TabsContent>
    </Tabs>
  );
};

export default DocumentationTabs;
