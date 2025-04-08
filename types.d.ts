interface Category {
  image: string;
  id: string;
  name: string;
  bgColor: { hex: string };
  icon: { url: string };
}

interface GetCategoryResponse {
  categories: Category[];
}

interface BusinessList {
  name: string;
  about: string;
  adress: string;
  category: { name: string };
  contactPerson: string;
  email: string;
  images: { url: string }[];
  id: string;
}

interface GetBusinessListResponse {
  businessLists: BusinessList[];
}

interface BusinessListByCategory {
  name: string;
  about: string;
  adress: string;
  category: { name: string };
  contactPerson: string;
  email: string;
  images: { url: string }[];
  id: string;
}
interface GetBusinessListByCategoryResponse {
  businessLists: BusinessListByCategory[];
}
interface BusinessById {
  name: string;
  about: string;
  adress: string;
  category: { name: string };
  contactPerson: string;
  email: string;
  images: { url: string }[];
  id: string;
}
interface GetBusinessByIdResponse {
  businessList: BusinessById;
}
type Params = {
  category: string;
};

export type {
  Category,
  GetCategoryResponse,
  BusinessList,
  GetBusinessListResponse,
  Params,
  BusinessListByCategory,
  GetBusinessListByCategoryResponse,
  GetBusinessByIdResponse,
};
