"use client";

import {
  ApiList,
  Button,
  DataTable,
  Heading,
  Separator,
} from "@/components/ui";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { CategoryColumn, columns } from "./columns";

interface CategoryClientProps {
  data: CategoryColumn[];
}

export const CategoryClient = ({ data }: CategoryClientProps) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Categories (${data.length})`}
          description="Manage categories for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/categories/new`)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New
        </Button>
      </div>
      <Separator />
      <DataTable searchKey="name" columns={columns} data={data} />
      <Heading title={"API"} description={"API calls for the Categories"} />
      <ApiList entityName="categories" entityIdName="categoryId" />
    </>
  );
};