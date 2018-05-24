const DropdownMenu = ({
  list, append, position, onSelect
}) => {
  const Append = append
  const classList = `dropdown-menu dropdown-menu--${position}`

  return (
    <div className={classList}>
      <ul className="dropdown-menu__list">
        {list.map(({ id, name }) => (
          <li key={id} className="dropdown-menu__item">
            <span
              onClick={() => onSelect(id)}
              role="button"
              tabIndex={0}
              className="dropdown-menu__link"
            >
              {name}
            </span>
          </li>
        ))}
        {append && <Append />}
      </ul>
    </div>
  )
}

DropdownMenu.defaultProps = {
  append: null,
  position: 'right',
  onSelect: () => {}
}

DropdownMenu.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  append: PropTypes.func,
  position: PropTypes.oneOf(['left', 'right']),
  onSelect: PropTypes.func
}

export default DropdownMenu
