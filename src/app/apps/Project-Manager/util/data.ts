import { Project, Task } from "./types";
import dayjs from "dayjs";

export const TASKS: Task[] = [
  {
    id: "85963b7d-0515-466f-84ab-af4790aac68b",
    description:
      "Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
  },
  {
    id: "9e7e7c85-bd59-4e1a-b728-20e460291a5c",
    description:
      "Phasellus sit amet erat. Nulla tempus. Vivamus in felis eu sapien cursus vestibulum.",
  },
  {
    id: "3285e09c-7c63-4a3c-8c05-25e6fc4d2a62",
    description:
      "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.",
  },
  {
    id: "abbb038a-53a7-46c4-9519-d3dfb5210ad8",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
  },
  {
    id: "2b24e05e-d825-4b58-9eb2-1f7a0131e5f4",
    description:
      "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.\n\nQuisque porta volutpat erat. Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus.\n\nPhasellus in felis. Donec semper sapien a libero. Nam dui.",
  },
  // {
  //   id: "530c282f-6d0f-4e0a-aa19-842f8943b3af",
  //   description:
  //     "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
  // },
  // {
  //   id: "c3e726ec-f7d1-4ec0-b6ef-90ade242ac08",
  //   description:
  //     "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
  // },
  // {
  //   id: "512a89c0-d723-47be-8caf-4fad34eee1ed",
  //   description:
  //     "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
  // },
  // {
  //   id: "8d3dadf8-9e1d-4375-8b74-43cbe644e8be",
  //   description:
  //     "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
  // },
  // {
  //   id: "efa1a633-e6c1-4321-ab30-cb6009323760",
  //   description:
  //     "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
  // },
];

export const PROJECTS: Project[] = [
  {
    id: "3285e09c-7D63-4a3c-8c05-25e6fc4d2a61",
    title: "Learning React",
    description: "Learn React from the group up",
    dueDate: dayjs(new Date()),
    tasks: [...TASKS],
  },
  {
    id: "328se09a-7D63-4jk4-8c05-25e6fc4d2a61",
    title: "Learning Angular",
    description: "Learn Angaulr",
    dueDate: dayjs(new Date()),
    tasks: [
      {
        id: "530c282f-6d0f-4e0a-aa19-842f8943b3af",
        description:
          "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.\n\nMaecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
      },
      {
        id: "c3e726ec-f7d1-4ec0-b6ef-90ade242ac08",
        description:
          "In sagittis dui vel nisl. Duis ac nibh. Fusce lacus purus, aliquet at, feugiat non, pretium quis, lectus.",
      },
      {
        id: "512a89c0-d723-47be-8caf-4fad34eee1ed",
        description:
          "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis.\n\nDuis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.\n\nMauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
      },
      {
        id: "8d3dadf8-9e1d-4375-8b74-43cbe644e8be",
        description:
          "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
      },
      {
        id: "efa1a633-e6c1-4321-ab30-cb6009323760",
        description:
          "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.\n\nMorbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
      },
    ],
  },
];
