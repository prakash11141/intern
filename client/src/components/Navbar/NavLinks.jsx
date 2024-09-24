import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavLinks = () => {
  const links = [
    {
      name: "Men",
      link: "/men",
    },
    { name: "Women", link: "/women" },
    { name: "Kid's", link: "/kids" },
    { name: "About", link: "/about" },
    {
      name: "Products",
      link: "/products",
      submenu: true,
      sublinks: [
        {
          Head: "Category",
          sublink: [
            { name: "Men", link: "products/category/1" },
            { name: "Women", link: "/products/category/2" },
            { name: "Kid's", link: "products/category/3" },
          ],
        },
      ],
    },
  ];

  return (
    <>
      {links.map((Link, linkindex) => (
        <div key={linkindex}>
          <div className="px-3 text-left md:cursor-pointer group">
            <NavLink to={Link.link || "#"} className="py-7 block">
              <h1 className="py-7">{Link.name}</h1>
            </NavLink>
            {Link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:block hover:block">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-3.5">
                    {Link.sublinks.map((mysubLinks, sublinkindex) => (
                      <div key={sublinkindex}>
                        <h1 className="text-lg font-semibold">
                          {mysubLinks.Head}
                        </h1>
                        <ul>
                          {mysubLinks.sublink.map((sLink, sindex) => (
                            <li
                              className="text-sm text-gray-600 my-2.5"
                              key={sindex}
                            >
                              <NavLink
                                to={sLink.link}
                                className="hover text-primary"
                              >
                                {sLink.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
