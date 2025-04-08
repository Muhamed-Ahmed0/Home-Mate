/* eslint-disable import/no-anonymous-default-export */
/* eslint-disable @typescript-eslint/no-unused-vars */
import request, { gql } from "graphql-request";
import { GetBusinessListResponse, GetCategoryResponse } from "@/types";
const MASTER_URL: string = `https://us-west-2.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_MASTER_URL_KEY}/master`;

const getCategory = async (): Promise<GetCategoryResponse> => {
  const query = gql`
    query Category {
      categories {
        bgColor {
          hex
        }
        id
        name
        icon {
          url
        }
      }
    }
  `;
  const result: GetCategoryResponse = await request(MASTER_URL, query);
  return result;
};

const getAllBusinessList = async (): Promise<GetBusinessListResponse> => {
  const query = gql`
    query MyQuery {
      businessLists {
        about
        adress
        name
        category {
          name
        }
        contactPerson
        email
        images {
          url
        }
        id
      }
    }
  `;
  const result: GetBusinessListResponse = await request(MASTER_URL, query);
  return result;
};

const getBusinessListByCategory = async (category: string) => {
  const query =
    gql`
    query MyQuery {
      businessLists(where: { category: { name: "` +
    category +
    `" } }) {
        about
        adress
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

const getBusinessById = async (id: string) => {
  const query =
    gql`
    query MyQuery {
      businessList(where: { id: "` +
    id +
    `" }) {
        about
        adress
        category {
          name
        }
        contactPerson
        email
        id
        name
        images {
          url
        }
      }
    }
    `;
  const result = await request(MASTER_URL, query);
  return result;
};

const createNewBooking = async (
  businessId: string,
  date: Date,
  time: string,
  userEmail: string,
  userName: string
) => {
  const mutationQuery =
    gql`
  mutation CreateBooking {
    createBooking(
      data: {bookingStatus: Booked, 
        businessList: {connect: {id: "` +
    businessId +
    `"}},
         date: "` +
    date +
    `", time: "` +
    time +
    `", 
         userEmail: "` +
    userEmail +
    `",
          userName: "` +
    userName +
    `"}
    ) {
      id
    }
    publishManyBookings(to: PUBLISHED) {
      count
    }
  }
  `;
  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
export default {
  getCategory,
  getAllBusinessList,
  getBusinessListByCategory,
  getBusinessById,
  createNewBooking,
};
