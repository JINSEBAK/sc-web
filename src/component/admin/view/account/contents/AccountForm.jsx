import DetailInfoSection from "component/admin/common/DetailInfoSection";
import SearchItem from "component/admin/common/SearchItem";
import Icon from "component/common/Icon";

const AccountForm = (props) => {
  const { adminInfo, isVisible, onChangeItem, onClickVisible } = props;
  return (
    <DetailInfoSection title={"관리자 정보"} className="register">
      <tr>
        <th>아이디</th>
        <td>
          <SearchItem
            type="text"
            placeholder="아이디"
            name="adminId"
            value={adminInfo.adminId}
            onChangeItem={onChangeItem}
          />
        </td>
        <th>비밀번호</th>
        <td className="pw">
          <SearchItem
            type={isVisible ? "text" : "password"}
            placeholder="비밀번호"
            name="adminPw"
            value={adminInfo.adminPw}
            onChangeItem={onChangeItem}
            onClickVisible={onClickVisible}
          />
          <Icon
            name={isVisible ? "lock" : "lock-off"}
            onClickIcon={onClickVisible}
          />
        </td>
      </tr>
    </DetailInfoSection>
  );
};

export default AccountForm;
