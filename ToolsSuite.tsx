import { useState } from "react"
import { Button } from "../components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "../components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs"
import {
  Search,
  X,
  Download,
  Box,
  FileText,
  Wand,
  Users,
  RotateCw,
  ChevronRight,
  Save,
  Share,
} from "lucide-react"

const ToolsSuite = () => {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 p-4">
      {/* Header Section */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Product Solutions Center</CardTitle>
            <div className="flex space-x-2">
              <Button variant="outline" className="space-x-2">
                <Save size={16} />
                <span>Save Workspace</span>
              </Button>
              <Button variant="outline" className="space-x-2">
                <Share size={16} />
                <span>Share</span>
              </Button>
              <Button variant="outline" className="space-x-2">
                <RotateCw size={16} />
                <span>Reset All</span>
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Main Tools Interface */}
      <Tabs defaultValue="visualizer" className="w-full">
        <TabsList className="grid grid-cols-4 gap-4 bg-transparent">
          <TabsTrigger
            value="visualizer"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 flex items-center space-x-2"
          >
            <Box size={16} />
            <span>Product Visualizer</span>
          </TabsTrigger>
          <TabsTrigger
            value="specs"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 flex items-center space-x-2"
          >
            <FileText size={16} />
            <span>Spec Generator</span>
          </TabsTrigger>
          <TabsTrigger
            value="guide"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 flex items-center space-x-2"
          >
            <Wand size={16} />
            <span>Application Guide</span>
          </TabsTrigger>
          <TabsTrigger
            value="rep"
            className="data-[state=active]:bg-blue-100 data-[state=active]:text-blue-800 flex items-center space-x-2"
          >
            <Users size={16} />
            <span>Rep Dashboard</span>
          </TabsTrigger>
        </TabsList>

        {/* Product Visualizer */}
        <TabsContent value="visualizer">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Product Navigation */}
                <div className="border-r pr-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Search size={16} className="text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search products..."
                        className="w-full border-b focus:outline-none focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-medium">Product Categories</h3>
                      <div className="space-y-1">
                        {["Conduit Systems", "Fittings", "Accessories"].map(
                          (category) => (
                            <button
                              key={category}
                              className="w-full text-left px-2 py-1 rounded hover:bg-gray-100"
                            >
                              {category}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3D Viewer */}
                <div className="col-span-2">
                  <div className="aspect-video bg-gray-100 rounded flex items-center justify-center">
                    <p className="text-gray-500">Interactive 3D View</p>
                  </div>
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {["Rotate", "Pan", "Zoom", "Explode"].map((control) => (
                      <Button
                        key={control}
                        variant="outline"
                        size="sm"
                        className="w-full"
                      >
                        {control}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spec Generator */}
        <TabsContent value="specs">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-6">
                {/* Form */}
                <div className="space-y-4">
                  <h3 className="font-medium">Project Details</h3>
                  <div className="space-y-2">
                    <label className="block">
                      <span className="text-sm">Project Name</span>
                      <input
                        type="text"
                        className="mt-1 w-full rounded border p-2"
                        placeholder="Enter project name"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm">Location</span>
                      <input
                        type="text"
                        className="mt-1 w-full rounded border p-2"
                        placeholder="Project location"
                      />
                    </label>
                    <label className="block">
                      <span className="text-sm">Required Certifications</span>
                      <select className="mt-1 w-full rounded border p-2">
                        <option>Select certifications</option>
                        <option>UL Listed</option>
                        <option>NEMA Rated</option>
                      </select>
                    </label>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Generate Spec Sheet
                  </Button>
                </div>

                {/* Preview */}
                <div className="border-l pl-6">
                  <h3 className="font-medium mb-4">Preview</h3>
                  <div className="aspect-[8.5/11] bg-gray-100 rounded"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Application Guide */}
        <TabsContent value="guide">
          <Card>
            <CardContent className="p-6">
              <div className="max-w-2xl mx-auto">
                <div className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Project Requirements</h3>

                    {/* Environment */}
                    <div className="space-y-2">
                      <label className="block">
                        <span className="font-medium">Environment Type</span>
                        <select className="mt-1 w-full rounded border p-2">
                          <option>Indoor Commercial</option>
                          <option>Outdoor Exposed</option>
                          <option>Underground</option>
                          <option>Hazardous Location</option>
                        </select>
                      </label>
                    </div>

                    {/* Conditions */}
                    <div className="space-y-2">
                      <span className="font-medium">
                        Environmental Conditions
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "Chemical Exposure",
                          "High Temperature",
                          "UV Exposure",
                          "Physical Impact",
                          "Moisture",
                          "Corrosive Environment",
                        ].map((condition) => (
                          <label
                            key={condition}
                            className="flex items-center space-x-2"
                          >
                            <input type="checkbox" className="rounded" />
                            <span>{condition}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    {/* Code Requirements */}
                    <div className="space-y-2">
                      <span className="font-medium">Code Requirements</span>
                      <div className="grid grid-cols-2 gap-2">
                        {[
                          "NEC Compliance",
                          "UL Listed",
                          "NEMA Rated",
                          "Local Code Compliance",
                        ].map((requirement) => (
                          <label
                            key={requirement}
                            className="flex items-center space-x-2"
                          >
                            <input type="checkbox" className="rounded" />
                            <span>{requirement}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Get Recommendations
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Rep Dashboard */}
        <TabsContent value="rep">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-3 gap-6">
                {/* Projects */}
                <div className="space-y-4">
                  <h3 className="font-medium">Active Projects</h3>
                  <div className="space-y-2">
                    {["Project Alpha", "Project Beta", "Project Gamma"].map(
                      (project) => (
                        <div
                          key={project}
                          className="p-3 border rounded hover:border-blue-500 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <span>{project}</span>
                            <ChevronRight size={16} />
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Saved Comparisons */}
                <div className="space-y-4">
                  <h3 className="font-medium">Saved Comparisons</h3>
                  <div className="space-y-2">
                    {["EMT vs GRC", "Standard vs Custom", "Cost Analysis"].map(
                      (comparison) => (
                        <div
                          key={comparison}
                          className="p-3 border rounded hover:border-blue-500 cursor-pointer"
                        >
                          <div className="flex justify-between items-center">
                            <span>{comparison}</span>
                            <div className="space-x-2">
                              <Button variant="ghost" size="sm">
                                <Share size={14} />
                              </Button>
                              <Button variant="ghost" size="sm">
                                <Download size={14} />
                              </Button>
                            </div>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="space-y-4">
                  <h3 className="font-medium">Quick Actions</h3>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText size={16} className="mr-2" />
                      Generate Quote
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download size={16} className="mr-2" />
                      Download Price List
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Share size={16} className="mr-2" />
                      Share Marketing Materials
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

export default ToolsSuite
