export function useCatalogo ({ router, route, newsReponse, page }) {
  function handlePage () {
    if (page.value === 1) {
      router.push('/catalogo/')
    } else if (page.value > newsReponse.value.totalPages) {
      page.value = parseInt(route.params['[...slug]'] as string)
    } else {
      router.push('/catalogo/p/' + page.value + '/')
    }
  }
  function pageBack () {
    if (page.value > 0 && page.value !== 1) {
      router.push('/catalogo/p/' + (page.value - 1) + '/')
    }
  }
  function pageNext () {
    if (newsReponse.value?.totalPages > page.value) {
      router.push('/catalogo/p/' + (page.value + 1) + '/')
    }
  }
  return { pageNext, pageBack, handlePage }
}
