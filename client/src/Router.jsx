import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Branches,
  CreateBranches,
  UpdateBranches,
  Categories,
  CreateCategories,
  Coaches,
  Members,
  Tools,
  UpdateCategories,
  UpdateTools,
  CreateTools,
  CreateMembers,
  MembersDetail,
  UpdateMembers,
  CategoriesDetail,
  CreateCoach,
  UpdateCoach,
  Package,
  CreatePackage,
  UpdatePackage,
} from "./pages";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/members" element={<Members />} />
        <Route path="/members/create-member" element={<CreateMembers />} />
        <Route path="/members/detail/:id" element={<MembersDetail />} />
        <Route path="/members/update-member/:id" element={<UpdateMembers />} />

        <Route path="/branches" element={<Branches />} />
        <Route path="/branches/create-branches" element={<CreateBranches />} />
        <Route
          path="/branches/update-branches/:id"
          element={<UpdateBranches />}
        />

        <Route path="/" element={<Categories />} />
        <Route path="/categories/detail/:id" element={<CategoriesDetail />} />
        <Route
          path="categories/create-categories/"
          element={<CreateCategories />}
        />
        <Route
          path="categories/update-categories/:id"
          element={<UpdateCategories />}
        />

        <Route path="/coaches" element={<Coaches />} />
        <Route path="/coaches/create-coaches" element={<CreateCoach />} />
        <Route path="/coaches/update-coaches/:id" element={<UpdateCoach />} />

        <Route path="/package" element={<Package />} />
        <Route path="/package/create-package" element={<CreatePackage />} />
        <Route path="/package/update-package/:id" element={<UpdatePackage />} />

        <Route path="/tools" element={<Tools />} />
        <Route path="/tools/create-tools" element={<CreateTools />} />
        <Route path="/tools/update-tools/:id" element={<UpdateTools />} />
      </Routes>
    </BrowserRouter>
  );
}
