"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload } from "lucide-react"

export default function AddDocumentPage() {
  const [isUploading, setIsUploading] = useState(false)
  const [fileName, setFileName] = useState("")
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const router = useRouter()

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setSelectedFile(file)
      setFileName(file.name)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // Simulate upload
    setTimeout(() => {
      setIsUploading(false)
      router.push("/dashboard")
    }, 2000)
  }

  return (
    <div className="flex min-h-screen bg-muted/40">
      <div className="flex-1 p-4 md:p-6">
        <div className="mx-auto max-w-2xl">
          <div className="mb-6">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Link>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Add New Document</CardTitle>
              <CardDescription>
                Upload a new document to your secure storage. All files are encrypted at rest.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="title">Document Title</Label>
                  <Input id="title" placeholder="Enter document title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Enter a description of this document"
                    className="min-h-[100px]"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="financial">Financial</SelectItem>
                        <SelectItem value="legal">Legal</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="security-level">Security Level</Label>
                    <Select>
                      <SelectTrigger id="security-level">
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public</SelectItem>
                        <SelectItem value="internal">Internal</SelectItem>
                        <SelectItem value="restricted">Restricted</SelectItem>
                        <SelectItem value="confidential">Confidential</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="file">Upload File</Label>
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-input p-6">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <div className="rounded-full bg-primary/10 p-3">
                        <Upload className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium">
                          {fileName ? fileName : "Drag and drop or click to upload"}
                        </p>
                        <p className="text-xs text-muted-foreground">Supports all file types up to 100MB</p>
                      </div>
                      <Input id="file" type="file" className="hidden" onChange={handleFileChange} />
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => document.getElementById("file")?.click()}
                      >
                        Select File
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date (Optional)</Label>
                  <Input id="expiry" type="date" />
                  <p className="text-xs text-muted-foreground">
                    Set a date when this document should be automatically archived.
                  </p>
                </div>

                <CardFooter className="flex justify-between px-0 pb-0">
                  <Button variant="outline" type="button" onClick={() => router.push("/dashboard")}>
                    Cancel
                  </Button>
                  <Button type="submit" disabled={isUploading || !selectedFile}>
                    {isUploading ? "Uploading..." : "Upload Document"}
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
