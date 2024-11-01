import { component$, useContext } from '@builder.io/qwik';
import { Image } from 'qwik-image';
import CollectionCard from '~/components/collection-card/CollectionCard';
import { APP_STATE, HOMEPAGE_IMAGE } from '~/constants';

export default component$(() => {
	const collections = useContext(APP_STATE).collections;
	return (
		<div>
			<div class="relative h-[400px]">
				<div class="absolute inset-0 overflow-hidden">
					<Image			
						layout="fullWidth"			
						class="w-full 	h-full object-cover" 
						width={1000}
						height={400}
						src={HOMEPAGE_IMAGE}
						alt="Background header photo of bicycle taken by Mikkel Bech"
					/>
					<div class="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-700 mix-blend-overlay" />
				</div>
				<div class="absolute inset-0 bg-gray-900 opacity-50" />
				<div class="relative max-w-3xl mx-auto py-12 px-6 flex flex-col items-center text-center sm:py-64 lg:px-0">
					<div class="relative bg-zinc-800 bg-opacity-0 rounded-lg p-0">
						<h1 class="text-6xl text-transparent bg-clip-text font-extrabold tracking-normal lg:text-6xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
						<img src={`/logo-192-192.png`} width={192} height={192} alt="Salime logo" />
						</h1>
					</div>

					<p class="py-3 text-1xl text-white ">
						{$localize`Celebrando a liberdade, autenticidade e inspiração.`}

					</p>
				</div>
			</div>

			<section class="pt-12 xl:max-w-7xl xl:mx-auto xl:px-8">
				<div class="mt-4 flow-root">
					<div class="-my-2">
						<div class="box-content py-2 px-2 relative overflow-x-auto xl:overflow-visible">
							<div class="sm:px-6 lg:px-8 xl:px-0 pb-4">
								<h2 class="text-2xl font-light tracking-tight text-gray-900">{$localize`Shop by Category`}</h2>
							</div>
							<div class="grid justify-items-center grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-8 sm:px-6 lg:px-8 xl:relative xl:px-0 xl:space-x-0 xl:gap-x-8">
								{collections.map((collection) =>
									collection.featuredAsset ? (
										<CollectionCard key={collection.id} collection={collection} />
									) : null
								)}
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
});