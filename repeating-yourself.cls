public class Foo {
	public Set<Id> getIds(List<Account> accounts) {
		Set<Id> ret = new Set<Id>();

		for (Account a : accounts) {
			ret.add(a.Id);
		}

		return ret;
	}

	public Set<String> getNames(List<Account> accounts) {
		Set<String> ret = new Set<String>();

		for (Account a : accounts) {
			ret.add(a.Name);
		}

		return ret;
	}
}