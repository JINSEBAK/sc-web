import classNames from "classnames";

const ListHeader = (props) => {
  const { list, sortDesc, sortItem, onClickSort } = props;
  return (
    <>
      {list.length > 0 && (
        <thead>
          <tr>
            {list.map((li, index) => (
              <th key={`table-th-${index}`}>
                {li.title}
                {li.sort && (
                  <span
                    className={classNames(
                      li.name === sortItem
                        ? sortDesc
                          ? "desc on"
                          : "asc on"
                        : "desc"
                    )}
                    onClick={() => onClickSort(li.name)}
                  />
                )}
              </th>
            ))}
          </tr>
        </thead>
      )}
    </>
  );
};

export default ListHeader;
